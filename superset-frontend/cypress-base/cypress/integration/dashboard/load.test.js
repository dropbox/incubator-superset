/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import readResponseBlob from '../../utils/readResponseBlob';
import { NON_LEGACY_PLUGINS } from '../../utils/vizPlugins';
import { WORLD_HEALTH_DASHBOARD } from './dashboard.helper';

describe('Dashboard load', () => {
  const aliases = [];

  beforeEach(() => {
    cy.server();
    cy.login();

    cy.visit(WORLD_HEALTH_DASHBOARD);

    cy.get('#app').then(data => {
      const bootstrapData = JSON.parse(data[0].dataset.bootstrap);
      const { slices } = bootstrapData.dashboard_data;
      // then define routes and create alias for each requests
      slices.forEach(slice => {
        const { viz_type: vizType } = slice;
        // only test non-legacy plugins
        if (!NON_LEGACY_PLUGINS.includes(vizType)) {
          const alias = `getJson_${slice.slice_id}`;
          const formData = `{"slice_id":${slice.slice_id}}`;
          cy.route('POST', `/superset/explore_json/?*${formData}*`).as(alias);
          aliases.push(`@${alias}`);
        }
      });
    });
  });

  it('should load dashboard', () => {
    // wait and verify one-by-one
    cy.wait(aliases).then(requests => {
      return Promise.all(
        requests.map(async xhr => {
          expect(xhr.status).to.eq(200);
          const responseBody = await readResponseBlob(xhr.response.body);
          expect(responseBody).to.have.property('errors');
          expect(responseBody.errors.length).to.eq(0);
          const sliceId = responseBody.form_data.slice_id;
          cy.get('[data-test="grid-content"]')
            .find(`#chart-id-${sliceId}`)
            .should('be.visible');
        }),
      );
    });
  });
});
