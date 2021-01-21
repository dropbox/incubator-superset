(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1084:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));a(34);var n=a(24),l=a.n(n),s=a(61),o=a.n(s),c=a(5),i=a.n(c),r=a(0),d=a(62),b=a(72),h=a(7),u=a(82),p=a.n(u),f=a(70),m=a(135),O=a(470),j=a(834),g=a(1);const y=d.c.p`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
`,C=d.c.div`
  .fa-refresh {
    padding-left: 9px;
  }

  .refresh-col {
    display: flex;
    align-items: center;
    width: 30px;
  }

  .section {
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
  }

  .select {
    flex-grow: 1;
  }
`;function v({dbId:e,formMode:t=!1,getDbList:a,getTableList:n,handleError:s,isDatabaseSelectEnabled:c=!0,onChange:d,onDbChange:u,onSchemaChange:v,onSchemasLoad:x,readOnly:S=!1,schema:_,sqlLabMode:E=!1}){const[w,T]=Object(r.useState)(e),[D,I]=Object(r.useState)(_),[k,N]=Object(r.useState)(!1),[M,L]=Object(r.useState)([]);function R(t,a=!1){const n=t||e;if(n){N(!0);const e=`/api/v1/database/${n}/schemas/?q=${p.a.encode({force:Boolean(a)})}`;return b.a.get({endpoint:e}).then(({json:e})=>{var t;const a=i()(t=e.result).call(t,e=>({value:e,label:e,title:e}));L(a),N(!1),x&&x(a)}).catch(()=>{L([]),N(!1),s(Object(h.e)("Error while fetching schema list"))})}return o.a.resolve()}function K({dbId:e,schema:t}){T(e),I(t),d&&d({dbId:e,schema:t,tableName:void 0})}function q(e){var t;return a&&a(e.result),0===e.result.length&&s(Object(h.e)("It seems you don't have access to any database")),i()(t=e.result).call(t,e=>({...e,label:`${e.backend} ${e.database_name}`}))}function P(e,t=!1){const a=e?e.id:null;L([]),v&&v(null),u&&u(e),R(a,t),K({dbId:a,schema:void 0})}function A(e){return Object(g.f)("span",{title:e.database_name},Object(g.f)(m.a,{bsStyle:"default"},e.backend)," ",e.database_name)}function $(e,t){return Object(g.f)("div",{className:"section"},Object(g.f)("span",{className:"select"},e),Object(g.f)("span",{className:"refresh-col"},t))}return Object(r.useEffect)(()=>{w&&R(w)},[w]),Object(g.f)(C,null,t&&Object(g.f)(y,null,Object(h.e)("datasource")),function(){const e=p.a.encode({order_columns:"database_name",order_direction:"asc",page:0,page_size:-1,...t||!E?{}:{filters:[{col:"expose_in_sqllab",opr:"eq",value:!0}]}});return $(Object(g.f)(O.a,{dataEndpoint:`/api/v1/database/?q=${e}`,onChange:e=>P(e),onAsyncError:()=>s(Object(h.e)("Error while fetching database list")),clearable:!1,value:w,valueKey:"id",valueRenderer:e=>Object(g.f)("div",null,Object(g.f)("span",{className:"text-muted m-r-5"},Object(h.e)("Database:")),A(e)),optionRenderer:A,mutator:q,placeholder:Object(h.e)("Select a database"),autoSelect:!0,isDisabled:!c||S}),null)}(),t&&Object(g.f)(y,null,Object(h.e)("schema")),function(){const a=l()(M).call(M,({value:e})=>D===e),s=!t&&!S&&Object(g.f)(j.a,{onClick:()=>P({id:e},!0),tooltipContent:Object(h.e)("Force refresh schema list")});return $(Object(g.f)(f.f,{name:"select-schema",placeholder:Object(h.e)("Select a schema (%s)",M.length),options:M,value:a,valueRenderer:e=>Object(g.f)("div",null,Object(g.f)("span",{className:"text-muted"},Object(h.e)("Schema:"))," ",e.label),isLoading:k,autosize:!1,onChange:e=>function(e,t=!1){const a=e?e.value:null;v&&v(a),I(a),K({dbId:w,schema:a}),n&&n(w,a,t)}(e),isDisabled:S}),s)}())}},1156:function(e,t,a){"use strict";a(34);var n=a(61),l=a.n(n),s=a(5),o=a.n(s),c=a(0),i=a(62),r=a(72),d=a(7),b=a(70),h=a(125),u=a(1084),p=a(834),f=a(985),m=a(1);const O=i.c.p`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
`,j=i.c.div`
  .fa-refresh {
    padding-left: 9px;
  }

  .refresh-col {
    display: flex;
    align-items: center;
    width: 30px;
  }

  .section {
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
  }

  .select {
    flex-grow: 1;
  }

  .divider {
    border-bottom: 1px solid ${({theme:e})=>e.colors.secondary.light5};
    margin: 15px 0;
  }
`,g=i.c.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  > svg,
  > small {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`;t.a=({database:e,dbId:t,formMode:a=!1,getDbList:n,handleError:s,isDatabaseSelectEnabled:i=!0,onChange:y,onDbChange:C,onSchemaChange:v,onSchemasLoad:x,onTableChange:S,onTablesLoad:_,readOnly:E=!1,schema:w,sqlLabMode:T=!0,tableName:D,tableNameSticky:I=!0})=>{const[k,N]=Object(c.useState)(w),[M,L]=Object(c.useState)(D),[R,K]=Object(c.useState)(!1),[q,P]=Object(c.useState)([]);function A(e,a,n=!1,c="undefined"){const i=a||k,b=e||t;if(b&&i){const e=encodeURIComponent(i),t=encodeURIComponent(c);K(!0),P([]);const a=encodeURI(`/superset/tables/${b}/${e}/${t}/${!!n}/`);return r.a.get({endpoint:a}).then(({json:e})=>{var t;const a=o()(t=e.options).call(t,e=>({value:e.value,schema:e.schema,label:e.label,title:e.title,type:e.type,extra:null==e?void 0:e.extra}));K(!1),P(a),_&&_(e.options)}).catch(()=>{K(!1),P([]),s(Object(d.e)("Error while fetching table list"))})}return K(!1),P([]),l.a.resolve()}function $({dbId:e,schema:t,tableName:a}){L(a),N(t),y&&y({dbId:e,schema:t,tableName:a})}function F(e="undefined"){if(!t||!e){const e=[];return l.a.resolve({options:e})}const a=encodeURIComponent(w||""),n=encodeURIComponent(e);return r.a.get({endpoint:encodeURI(`/superset/tables/${t}/${a}/${n}`)}).then(({json:e})=>{var t;return{options:o()(t=e.options).call(t,e=>({value:e.value,schema:e.schema,label:e.label,title:e.title,type:e.type}))}})}function B(e){if(!e)return void L("");const a=e.schema,n=e.value;I&&$({dbId:t,schema:a,tableName:n}),S&&S(n,a)}function U(e){var t;return Object(m.f)(g,{title:e.label},Object(m.f)("small",{className:"text-muted"},Object(m.f)("i",{className:`fa fa-${"view"===e.type?"eye":"table"}`})),(null==(t=e.extra)?void 0:t.certification)&&Object(m.f)(f.a,{certifiedBy:e.extra.certification.certified_by,details:e.extra.certification.details,size:20}),e.label)}return Object(c.useEffect)(()=>{t&&w&&A()},[t,w]),Object(m.f)(j,null,Object(m.f)(u.a,{dbId:t,formMode:a,getDbList:n,getTableList:A,handleError:s,onChange:$,onDbChange:E?void 0:C,onSchemaChange:E?void 0:v,onSchemasLoad:x,schema:k,sqlLabMode:T,isDatabaseSelectEnabled:i&&!E,readOnly:E}),!a&&Object(m.f)("div",{className:"divider"}),T&&Object(m.f)("div",{className:"section"},Object(m.f)(h.a,null,Object(d.e)("See table schema")," ",w&&Object(m.f)("small",null,q.length," in",Object(m.f)("i",null,w)))),a&&Object(m.f)(O,null,Object(d.e)("Table")),function(){const n=q;let l=null;if(k&&!a)l=Object(m.f)(b.f,{name:"select-table",isLoading:R,ignoreAccents:!1,placeholder:Object(d.e)("Select table or type table name"),autosize:!1,onChange:B,options:n,value:M,optionRenderer:U,valueRenderer:U,isDisabled:E});else if(a)l=Object(m.f)(b.c,{name:"select-table",isLoading:R,ignoreAccents:!1,placeholder:Object(d.e)("Select table or type table name"),autosize:!1,onChange:B,options:n,value:M,optionRenderer:U});else{let t,a=!1;e&&e.allow_multi_schema_metadata_fetch?t=Object(d.e)("Type to search ..."):(t=Object(d.e)("Select table "),a=!0),l=Object(m.f)(b.b,{name:"async-select-table",placeholder:t,isDisabled:a,autosize:!1,onChange:B,value:M,loadOptions:F,optionRenderer:U})}return function(e,t){return Object(m.f)("div",{className:"section"},Object(m.f)("span",{className:"select"},e),Object(m.f)("span",{className:"refresh-col"},t))}(l,!a&&!E&&Object(m.f)(p.a,{onClick:()=>function(e,a=!1){const n=e?e.value:null;v&&v(n),$({dbId:t,schema:n,tableName:void 0}),A(t,k,a)}({value:w},!0),tooltipContent:Object(d.e)("Force refresh table list")}))}())}},1425:function(e,t,a){},1725:function(e,t,a){"use strict";a.r(t);a(34);var n=a(79),l=a.n(n),s=a(28),o=a.n(s),c=a(64),i=a.n(c),r=a(5),d=a.n(r),b=a(6),h=a.n(b),u=a(24),p=a.n(u),f=a(17),m=a.n(f),O=a(0),j=a.n(O),g=a(2),y=a.n(g),C=a(3045),v=a(3043),x=a(1005),S=a(1719),_=a(307),E=a(124),w=a.n(E),T=a(62),D=a(7),I=a(72),k=a(127),N=a(33),M=a(985),L=a(1084),R=a(31),K=a(135),q=a(169),P=a(1156),A=a(620),$=a(66),F=a(394),B=a(391),U=a(449),z=a(864),G=a(1083),W=a(1085),Q=a(23),J=a.n(Q),H=a(42),Y=a.n(H),V=a(213),Z=a.n(V),X=a(3046);function ee(e,t,a){var n;return d()(n=j.a.Children).call(n,e,e=>{let n=e;return e&&e.type.name===t.name&&(n=j.a.cloneElement(e,a(e))),n&&n.props.children&&(n=j.a.cloneElement(n,{children:ee(n.props.children,t,a)})),n})}var te=a(571),ae=a(537),ne=a(57),le=a(83),se=a(73),oe=a(3),ce=a.n(oe),ie=a(37),re=function(e){function t(){return e.apply(this,arguments)||this}return Object(se.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=Object(le.a)(e,["className"]),n=Object(ie.f)(a),l=n[0],s=n[1],o=Object(ie.d)(l);return j.a.createElement("span",Object(ne.a)({},s,{className:ce()(t,o)}))},t}(j.a.Component),de=Object(ie.a)("help-block",re),be=a(60),he=a(125),ue=(a(3387),a(1));const pe={value:y.a.any,label:y.a.string.isRequired,description:y.a.node,fieldKey:y.a.string.isRequired,control:y.a.node.isRequired,onChange:y.a.func,compact:y.a.bool};class fe extends j.a.PureComponent{constructor(e){var t;super(e),this.onChange=h()(t=this.onChange).call(t,this)}onChange(e){this.props.onChange(this.props.fieldKey,e)}render(){const{compact:e,value:t,label:a,control:n,description:l,fieldKey:s}=this.props,o=j.a.cloneElement(n,{value:t,onChange:this.onChange});return Object(ue.f)(te.a,{controlId:s},Object(ue.f)(he.a,{className:"m-r-5"},a||s,e&&l&&Object(ue.f)(be.a,{id:"field-descr",placement:"right",title:l},Object(ue.f)("i",{className:"fa fa-info-circle m-l-5"})))," ",o,Object(ue.f)(ae.a.Feedback,null),!e&&l&&Object(ue.f)(de,null,l))}}fe.propTypes=pe,fe.defaultProps={onChange:()=>{},compact:!1,description:null};const me={children:y.a.node.isRequired,onChange:y.a.func,item:y.a.object,title:y.a.node,compact:y.a.bool};class Oe extends j.a.PureComponent{constructor(e){var t;super(e),this.onChange=h()(t=this.onChange).call(t,this)}onChange(e,t){return this.props.onChange({...this.props.item,[e]:t})}render(){const{title:e}=this.props;return Object(ue.f)(X.a,{componentClass:"fieldset",className:"CRUD"},e&&Object(ue.f)("legend",null,e),ee(this.props.children,fe,e=>({onChange:this.onChange,value:this.props.item[e.props.fieldKey],compact:this.props.compact})))}}function je(e){const t=d()(e).call(e,e=>({...e,id:e.id||w.a.generate()})),a={};return m()(t).call(t,e=>{a[e.id]=e}),a}Oe.propTypes=me,Oe.defaultProps={compact:!1,title:null};class ge extends j.a.PureComponent{constructor(e){var t,a,n,l,s,o,c;super(e),this.state={expandedColumns:{},collection:je(e.collection)},this.renderItem=h()(t=this.renderItem).call(t,this),this.onAddItem=h()(a=this.onAddItem).call(a,this),this.renderExpandableSection=h()(n=this.renderExpandableSection).call(n,this),this.getLabel=h()(l=this.getLabel).call(l,this),this.onFieldsetChange=h()(s=this.onFieldsetChange).call(s,this),this.renderTableBody=h()(o=this.renderTableBody).call(o,this),this.changeCollection=h()(c=this.changeCollection).call(c,this)}UNSAFE_componentWillReceiveProps(e){e.collection!==this.props.collection&&this.setState({collection:je(e.collection)})}onCellChange(e,t,a){this.changeCollection({...this.state.collection,[e]:{...this.state.collection[e],[t]:a}})}onAddItem(){if(this.props.itemGenerator){let e=this.props.itemGenerator();e.id||(e={...e,id:w.a.generate()}),this.changeCollection({...this.state.collection,[e.id]:e})}}onFieldsetChange(e){this.changeCollection({...this.state.collection,[e.id]:e})}getLabel(e){const{columnLabels:t}=this.props;let a=t&&t[e]?t[e]:e;return Z()(a).call(a,"__")&&(a=""),a}changeCollection(e){var t;(this.setState({collection:e}),this.props.onChange)&&this.props.onChange(d()(t=Y()(e)).call(t,t=>e[t]))}deleteItem(e){const t={...this.state.collection};delete t[e],this.changeCollection(t)}effectiveTableColumns(){var e;const{tableColumns:t,allowDeletes:a,expandFieldset:n}=this.props,s=a?l()(t).call(t,["__actions"]):t;return n?l()(e=["__expand"]).call(e,s):s}toggleExpand(e){this.onCellChange(e,"__expanded",!1),this.setState(t=>({expandedColumns:{...t.expandedColumns,[e]:!t.expandedColumns[e]}}))}renderHeaderRow(){const e=this.effectiveTableColumns(),{allowDeletes:t,expandFieldset:a,extraButtons:n}=this.props;return Object(ue.f)("thead",null,Object(ue.f)("tr",null,a&&Object(ue.f)("th",{"aria-label":"Expand",className:"tiny-cell"}),d()(e).call(e,e=>Object(ue.f)("th",{key:e},this.getLabel(e))),n,t&&Object(ue.f)("th",{key:"delete-item","aria-label":"Delete",className:"tiny-cell"})))}renderExpandableSection(e){return ee(this.props.expandFieldset,Oe,()=>({item:e,onChange:this.onFieldsetChange}))}renderCell(e,t){var a;const n=this.props.itemRenderers&&this.props.itemRenderers[t],l=e[t],s=h()(a=this.onCellChange).call(a,this,e.id,t);return n?n(l,s,this.getLabel(t),e):l}renderItem(e){const{allowAddItem:t,allowDeletes:a,expandFieldset:n,tableColumns:s}=this.props,o=!!this.state.expandedColumns[e.id]||e.__expanded;let c=[];var i,r;n&&c.push(Object(ue.f)("td",{key:"__expand",className:"expand"},Object(ue.f)("i",{role:"button","aria-label":"Toggle expand",tabIndex:0,className:`fa fa-caret-${o?"down":"right"} text-primary pointer`,onClick:h()(i=this.toggleExpand).call(i,this,e.id)})));(c=l()(c).call(c,d()(s).call(s,t=>Object(ue.f)("td",{key:t},this.renderCell(e,t)))),t&&c.push(Object(ue.f)("td",{key:"add"})),a)&&c.push(Object(ue.f)("td",{key:"__actions"},Object(ue.f)("i",J()({"data-test":"crud-delete-icon"},{role:"button","aria-label":"Delete item",tabIndex:0,className:"fa fa-trash text-primary pointer",onClick:h()(r=this.deleteItem).call(r,this,e.id)}))));const b=[Object(ue.f)("tr",J()({"data-test":"table-row"},{className:"row",key:e.id}),c)];return o&&b.push(Object(ue.f)("tr",{className:"exp",key:`exp__${e.id}`},Object(ue.f)("td",{colSpan:this.effectiveTableColumns().length,className:"expanded"},Object(ue.f)("div",null,this.renderExpandableSection(e))))),b}renderEmptyCell(){return Object(ue.f)("tr",null,Object(ue.f)("td",{className:"empty-collection"},this.props.emptyMessage))}renderTableBody(){var e;const t=d()(e=Y()(this.state.collection)).call(e,e=>this.state.collection[e]),a=t.length?d()(t).call(t,e=>this.renderItem(e)):this.renderEmptyCell();return Object(ue.f)("tbody",null,a)}render(){return Object(ue.f)("div",{className:"CRUD"},Object(ue.f)("span",{className:"float-right m-t-10 m-r-10"},this.props.allowAddItem&&Object(ue.f)(N.a,{buttonSize:"sm",buttonStyle:"primary",onClick:this.onAddItem},Object(ue.f)("i",{className:"fa fa-plus"})," ",Object(D.e)("Add Item"))),Object(ue.f)("table",{className:"table"},this.renderHeaderRow(),this.renderTableBody()))}}var ye=a(75),Ce=a(40);const ve=T.c.div`
  .change-warning {
    margin: 16px 10px 0;
    color: ${({theme:e})=>e.colors.warning.base};
  }

  .change-warning .bold {
    font-weight: ${({theme:e})=>e.typography.weights.bold};
  }
`,xe=T.c.div`
  align-items: center;
  display: flex;

  > svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,Se=T.c.div`
  font-size: ${T.d.typography.sizes.s}px;
  display: flex;
  align-items: center;
  a {
    padding: 0 10px;
  }
`,_e=(e,t)=>Object(ue.f)(F.a,{value:e,onChange:t}),Ee=["STRING","NUMERIC","DATETIME"],we=[{key:"physical",label:Object(D.e)("Physical (table or view)")},{key:"virtual",label:Object(D.e)("Virtual (SQL)")}],Te={};function De({title:e,collection:t}){return Object(ue.f)("div",null,e," ",Object(ue.f)(_.a,{count:t?t.length:0,showZero:!0}))}function Ie({columns:e,onChange:t,editableColumnName:a,showExpression:n,allowAddItem:l,allowEditDataType:s,itemGenerator:o}){return Object(ue.f)(ge,{collection:e,tableColumns:["column_name","type","is_dttm","filterable","groupby"],allowDeletes:!0,allowAddItem:l,itemGenerator:o,expandFieldset:Object(ue.f)(Ne,null,Object(ue.f)(Oe,{compact:!0},n&&Object(ue.f)(fe,{fieldKey:"expression",label:Object(D.e)("SQL Expression"),control:Object(ue.f)(z.a,{language:"markdown",offerEditInModal:!1})}),Object(ue.f)(fe,{fieldKey:"verbose_name",label:Object(D.e)("Label"),control:Object(ue.f)(B.a,{controlId:"verbose_name",placeholder:Object(D.e)("Label")})}),Object(ue.f)(fe,{fieldKey:"description",label:Object(D.e)("Description"),control:Object(ue.f)(B.a,{controlId:"description",placeholder:Object(D.e)("Description")})}),s&&Object(ue.f)(fe,{fieldKey:"type",label:Object(D.e)("Data Type"),control:Object(ue.f)(U.a,{choices:Ee,name:"type",freeForm:!0})}),Object(ue.f)(fe,{fieldKey:"python_date_format",label:Object(D.e)("Datetime Format"),description:Object(ue.f)("div",null,Object(D.e)("The pattern of timestamp format. For strings use "),Object(ue.f)("a",{href:"https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior"},Object(D.e)("python datetime string pattern")),Object(D.e)(" expression which needs to adhere to the "),Object(ue.f)("a",{href:"https://en.wikipedia.org/wiki/ISO_8601"},Object(D.e)("ISO 8601")),Object(D.e)(" standard to ensure that the lexicographical ordering\n                      coincides with the chronological ordering. If the\n                      timestamp format does not adhere to the ISO 8601 standard\n                      you will need to define an expression and type for\n                      transforming the string into a date or timestamp. Note\n                      currently time zones are not supported. If time is stored\n                      in epoch format, put `epoch_s` or `epoch_ms`. If no pattern\n                      is specified we fall back to using the optional defaults on a per\n                      database/column name level via the extra parameter.")),control:Object(ue.f)(B.a,{controlId:"python_date_format",placeholder:"%Y/%m/%d"})}))),columnLabels:{column_name:Object(D.e)("Column"),type:Object(D.e)("Data Type"),groupby:Object(D.e)("Is Dimension"),is_dttm:Object(D.e)("Is Temporal"),filterable:Object(D.e)("Is Filterable")},onChange:t,itemRenderers:{column_name:(e,t)=>a?Object(ue.f)(A.a,{canEdit:!0,title:e,onSaveTitle:t}):e,type:e=>Object(ue.f)(K.a,null,e),is_dttm:_e,filterable:_e,groupby:_e}})}function ke({label:e,formElement:t}){return Object(ue.f)("div",null,Object(ue.f)("div",null,Object(ue.f)("strong",null,e)),Object(ue.f)("div",null,t))}function Ne({children:e}){return Object(ue.f)(C.a,{style:{marginTop:20}},e)}m()(we).call(we,e=>{Te[e.key]=e}),De.propTypes={title:y.a.string,collection:y.a.array},Ie.propTypes={columns:y.a.array.isRequired,onChange:y.a.func.isRequired,editableColumnName:y.a.bool,showExpression:y.a.bool,allowAddItem:y.a.bool,allowEditDataType:y.a.bool,itemGenerator:y.a.func},Ie.defaultProps={editableColumnName:!1,showExpression:!1,allowAddItem:!1,allowEditDataType:!1,itemGenerator:()=>({column_name:"<new column>",filterable:!0,groupby:!0})},ke.propTypes={label:y.a.string,formElement:y.a.node},Ne.propTypes={children:y.a.node};const Me={datasource:y.a.object.isRequired,onChange:y.a.func,addSuccessToast:y.a.func.isRequired,addDangerToast:y.a.func.isRequired};class Le extends j.a.PureComponent{constructor(e){var t,a,n,l,s,o,c,i,r,d;super(e),this.state={datasource:e.datasource,errors:[],isDruid:"druid"===e.datasource.type||"druid"===e.datasource.datasource_type,isSqla:"table"===e.datasource.datasource_type||"table"===e.datasource.type,isEditMode:!1,databaseColumns:p()(t=e.datasource.columns).call(t,e=>!e.expression),calculatedColumns:p()(a=e.datasource.columns).call(a,e=>!!e.expression),metadataLoading:!1,activeTabKey:0,datasourceType:e.datasource.sql?Te.virtual.key:Te.physical.key},this.onChange=h()(n=this.onChange).call(n,this),this.onChangeEditMode=h()(l=this.onChangeEditMode).call(l,this),this.onDatasourcePropChange=h()(s=this.onDatasourcePropChange).call(s,this),this.onDatasourceChange=h()(o=this.onDatasourceChange).call(o,this),this.syncMetadata=h()(c=this.syncMetadata).call(c,this),this.setColumns=h()(i=this.setColumns).call(i,this),this.validateAndChange=h()(r=this.validateAndChange).call(r,this),this.handleTabSelect=h()(d=this.handleTabSelect).call(d,this),this.allowEditSource=!Object(Ce.c)(Ce.a.DISABLE_DATASET_SOURCE_EDIT)}onChange(){const{datasourceType:e,datasource:t}=this.state,a=e===Te.physical.key?"":t.sql,n={...this.state.datasource,sql:a,columns:[...this.state.databaseColumns,...this.state.calculatedColumns]};this.props.onChange(n,this.state.errors)}onChangeEditMode(){this.setState(e=>({isEditMode:!e.isEditMode}))}onDatasourceChange(e){this.setState({datasource:e},this.validateAndChange)}onDatasourcePropChange(e,t){const a={...this.state.datasource,[e]:t};this.setState(a=>({datasource:{...a.datasource,[e]:t}}),this.onDatasourceChange(a))}onDatasourceTypeChange(e){this.setState({datasourceType:e})}setColumns(e){this.setState(e,this.validateAndChange)}validateAndChange(){this.validate(this.onChange)}updateColumns(e){var t;const{databaseColumns:a}=this.state,n=d()(e).call(e,e=>e.name),l=i()(a).call(a,(e,t)=>({...e,[t.column_name]:t}),{}),s=[],c={added:[],modified:[],removed:p()(t=d()(a).call(a,e=>e.column_name)).call(t,e=>!o()(n).call(n,e))};return m()(e).call(e,e=>{const t=l[e.name];t?t.type!==e.type?(s.push({...t,type:e.type}),c.modified.push(e.name)):s.push(t):(s.push({id:w.a.generate(),column_name:e.name,type:e.type,groupby:!0,filterable:!0}),c.added.push(e.name))}),(c.added.length||c.modified.length||c.removed.length)&&this.setColumns({databaseColumns:s}),c}syncMetadata(){const{datasource:e}=this.state,t=`/datasource/external_metadata/${e.type||e.datasource_type}/${e.id}/`;this.setState({metadataLoading:!0}),I.a.get({endpoint:t}).then(({json:e})=>{const t=this.updateColumns(e);t.modified.length&&this.props.addSuccessToast(Object(D.e)("Modified columns: %s",t.modified.join(", "))),t.removed.length&&this.props.addSuccessToast(Object(D.e)("Removed columns: %s",t.removed.join(", "))),t.added.length&&this.props.addSuccessToast(Object(D.e)("New columns added: %s",t.added.join(", "))),this.props.addSuccessToast(Object(D.e)("Metadata has been synced")),this.setState({metadataLoading:!1})}).catch(e=>Object($.a)(e).then(({error:e,statusText:t})=>{this.props.addDangerToast(e||t||Object(D.e)("An error has occurred")),this.setState({metadataLoading:!1})}))}findDuplicates(e,t){const a={},n=[];return m()(e).call(e,e=>{const l=t(e);l in a?n.push(l):a[l]=null}),n}validate(e){var t;let a,n=[];const{datasource:s}=this.state;a=this.findDuplicates(s.columns,e=>e.column_name),n=l()(n).call(n,d()(a).call(a,e=>Object(D.e)("Column name [%s] is duplicated",e))),a=this.findDuplicates(s.metrics,e=>e.metric_name),n=l()(n).call(n,d()(a).call(a,e=>Object(D.e)("Metric name [%s] is duplicated",e)));const o=p()(t=this.state.calculatedColumns).call(t,e=>!e.expression&&!e.json);n=l()(n).call(n,d()(o).call(o,e=>Object(D.e)("Calculated column [%s] requires an expression",e.column_name))),this.setState({errors:n},e)}handleTabSelect(e){this.setState({activeTabKey:e})}renderSettingsFieldset(){const{datasource:e}=this.state;return Object(ue.f)(Oe,{title:Object(D.e)("Basic"),item:e,onChange:this.onDatasourceChange},Object(ue.f)(fe,{fieldKey:"description",label:Object(D.e)("Description"),control:Object(ue.f)(z.a,{language:"markdown",offerEditInModal:!1})}),Object(ue.f)(fe,{fieldKey:"default_endpoint",label:Object(D.e)("Default URL"),description:Object(D.e)("Default URL to redirect to when accessing from the dataset list page"),control:Object(ue.f)(B.a,{controlId:"default_endpoint"})}),Object(ue.f)(fe,{fieldKey:"filter_select_enabled",label:Object(D.e)("Autocomplete filters"),description:Object(D.e)("Whether to populate autocomplete filters options"),control:Object(ue.f)(F.a,null)}),this.state.isSqla&&Object(ue.f)(fe,{fieldKey:"fetch_values_predicate",label:Object(D.e)("Autocomplete Query Predicate"),description:Object(D.e)('When using "Autocomplete filters", this can be used to improve performance of the query fetching the values. Use this option to apply a predicate (WHERE clause) to the query selecting the distinct values from the table. Typically the intent would be to limit the scan by applying a relative time filter on a partitioned or indexed time-related field.'),control:Object(ue.f)(B.a,{controlId:"fetch_values_predicate"})}),this.state.isSqla&&Object(ue.f)(fe,{fieldKey:"extra",label:Object(D.e)("Extra"),description:Object(D.e)('Extra data to specify table metadata. Currently supports certification data of the format: `{ "certification": { "certified_by": "Data Platform Team", "details": "This table is the source of truth." } }`.'),control:Object(ue.f)(z.a,{controlId:"extra",language:"json",offerEditInModal:!1})}),Object(ue.f)(fe,{fieldKey:"owners",label:Object(D.e)("Owners"),description:Object(D.e)("Owners of the dataset"),control:Object(ue.f)(G.a,{dataEndpoint:"api/v1/dataset/related/owners",multi:!0,mutator:e=>{var t;return d()(t=e.result).call(t,e=>({value:e.value,label:`${e.text}`}))}}),controlProps:{}}))}renderAdvancedFieldset(){const{datasource:e}=this.state;return Object(ue.f)(Oe,{title:Object(D.e)("Advanced"),item:e,onChange:this.onDatasourceChange},Object(ue.f)(fe,{fieldKey:"cache_timeout",label:Object(D.e)("Cache Timeout"),description:Object(D.e)("The duration of time in seconds before the cache is invalidated"),control:Object(ue.f)(B.a,{controlId:"cache_timeout"})}),Object(ue.f)(fe,{fieldKey:"offset",label:Object(D.e)("Hours offset"),control:Object(ue.f)(B.a,{controlId:"offset"})}),this.state.isSqla&&Object(ue.f)(fe,{fieldKey:"template_params",label:Object(D.e)("Template parameters"),description:Object(D.e)("A set of parameters that become available in the query using Jinja templating syntax"),control:Object(ue.f)(B.a,{controlId:"template_params"})}))}renderSpatialTab(){var e;const{datasource:t}=this.state,{spatials:a,all_cols:n}=t;return Object(ue.f)(k.c.TabPane,{tab:Object(ue.f)(De,{collection:a,title:Object(D.e)("Spatial")}),key:4},Object(ue.f)(ge,{tableColumns:["name","config"],onChange:h()(e=this.onDatasourcePropChange).call(e,this,"spatials"),itemGenerator:()=>({name:"<new spatial>",type:"<no type>",config:null}),collection:a,allowDeletes:!0,itemRenderers:{name:(e,t)=>Object(ue.f)(A.a,{canEdit:!0,title:e,onSaveTitle:t}),config:(e,t)=>Object(ue.f)(W.a,{value:e,onChange:t,choices:n})}}))}renderSourceFieldset(){const{datasource:e}=this.state;return Object(ue.f)("div",null,Object(ue.f)("div",{className:"m-l-10 m-t-20 m-b-10"},d()(we).call(we,e=>{var t;return Object(ue.f)(v.a,{key:e.key,value:e.key,inline:!0,onChange:h()(t=this.onDatasourceTypeChange).call(t,this,e.key),checked:this.state.datasourceType===e.key,disabled:!this.state.isEditMode},e.label)})),Object(ue.f)("hr",null),Object(ue.f)(Oe,{item:e,onChange:this.onDatasourceChange,compact:!0},this.state.datasourceType===Te.virtual.key&&Object(ue.f)("div",null,this.state.isSqla&&Object(ue.f)(j.a.Fragment,null,Object(ue.f)(fe,{fieldKey:"databaseSelector",label:Object(D.e)("virtual"),control:Object(ue.f)(L.a,{dbId:e.database.id,schema:e.schema,onSchemaChange:e=>this.state.isEditMode&&this.onDatasourcePropChange("schema",e),onDbChange:e=>this.state.isEditMode&&this.onDatasourcePropChange("database",e),formMode:!1,handleError:this.props.addDangerToast,readOnly:!this.state.isEditMode})}),Object(ue.f)(fe,{fieldKey:"table_name",label:Object(D.e)("dataset name"),control:Object(ue.f)(B.a,{controlId:"table_name",onChange:e=>{this.onDatasourcePropChange("table_name",e)},placeholder:Object(D.e)("dataset name"),disabled:!this.state.isEditMode})}),Object(ue.f)(fe,{fieldKey:"sql",label:Object(D.e)("SQL"),description:Object(D.e)("When specifying SQL, the datasource acts as a view. Superset will use this statement as a subquery while grouping and filtering on the generated parent queries."),control:Object(ue.f)(z.a,{language:"sql",offerEditInModal:!1,minLines:20,maxLines:20,readOnly:!this.state.isEditMode})})),this.state.isDruid&&Object(ue.f)(fe,{fieldKey:"json",label:Object(D.e)("JSON"),description:Object(ue.f)("div",null,Object(D.e)("The JSON metric or post aggregation definition.")),control:Object(ue.f)(z.a,{language:"json",offerEditInModal:!1})})),this.state.datasourceType===Te.physical.key&&Object(ue.f)(x.a,{md:6},this.state.isSqla&&Object(ue.f)(fe,{fieldKey:"tableSelector",label:Object(D.e)("Physical"),control:Object(ue.f)(P.a,{clearable:!1,dbId:e.database.id,handleError:this.props.addDangerToast,schema:e.schema,sqlLabMode:!1,tableName:e.table_name,onSchemaChange:this.state.isEditMode?e=>this.onDatasourcePropChange("schema",e):void 0,onDbChange:this.state.isEditMode?e=>this.onDatasourcePropChange("database",e):void 0,onTableChange:this.state.isEditMode?e=>this.onDatasourcePropChange("table_name",e):void 0,readOnly:!this.state.isEditMode}),description:Object(D.e)("The pointer to a physical table (or view). Keep in mind that the chart is associated to this Superset logical table, and this logical table points the physical table referenced here.")}))),this.allowEditSource&&Object(ue.f)(Se,null,Object(ue.f)("span",{role:"button",tabIndex:0,onClick:this.onChangeEditMode},Object(ue.f)(R.a,{color:T.d.colors.grayscale.base,name:this.state.isEditMode?"lock-unlocked":"lock-locked"})),!this.state.isEditMode&&Object(ue.f)("div",null,Object(D.e)("Click the lock to make changes.")),this.state.isEditMode&&Object(ue.f)("div",null,Object(D.e)("Click the lock to prevent further changes."))))}renderErrors(){var e;return this.state.errors.length>0?Object(ue.f)(S.a,{bsStyle:"danger"},d()(e=this.state.errors).call(e,e=>Object(ue.f)("div",{key:e},e))):null}renderMetricCollection(){var e;return Object(ue.f)(ge,{tableColumns:["metric_name","verbose_name","expression"],columnLabels:{metric_name:Object(D.e)("Metric"),verbose_name:Object(D.e)("Label"),expression:Object(D.e)("SQL Expression")},expandFieldset:Object(ue.f)(Ne,null,Object(ue.f)(Oe,{compact:!0},Object(ue.f)(fe,{fieldKey:"verbose_name",label:Object(D.e)("Label"),control:Object(ue.f)(B.a,{controlId:"verbose_name"})}),Object(ue.f)(fe,{fieldKey:"description",label:Object(D.e)("Description"),control:Object(ue.f)(B.a,{controlId:"description",placeholder:Object(D.e)("Description")})}),Object(ue.f)(fe,{fieldKey:"d3format",label:Object(D.e)("D3 Format"),control:Object(ue.f)(B.a,{controlId:"d3format",placeholder:"%y/%m/%d"})}),Object(ue.f)(fe,{label:Object(D.e)("Warning Message"),fieldKey:"warning_text",description:Object(D.e)("Warning message to display in the metric selector"),control:Object(ue.f)(B.a,{controlId:"warning_text",placeholder:Object(D.e)("Warning Message")})}),Object(ue.f)(fe,{label:Object(D.e)("Certified By"),fieldKey:"certified_by",description:Object(D.e)("Person or group that has certified this metric"),control:Object(ue.f)(B.a,{controlId:"certified_by",placeholder:Object(D.e)("Certified By")})}),Object(ue.f)(fe,{label:Object(D.e)("Certification Details"),fieldKey:"certification_details",description:Object(D.e)("Details of the certification"),control:Object(ue.f)(B.a,{controlId:"certification_details",placeholder:Object(D.e)("Certification Details")})}))),collection:this.state.datasource.metrics,allowAddItem:!0,onChange:h()(e=this.onDatasourcePropChange).call(e,this,"metrics"),itemGenerator:()=>({metric_name:"<new metric>",verbose_name:"",expression:""}),itemRenderers:{metric_name:(e,t,a,n)=>Object(ue.f)(xe,null,n.is_certified&&Object(ue.f)(M.a,{certifiedBy:n.certified_by,details:n.certification_details}),Object(ue.f)(A.a,{canEdit:!0,title:e,onSaveTitle:t})),verbose_name:(e,t)=>Object(ue.f)(A.a,{canEdit:!0,title:e,onSaveTitle:t}),expression:(e,t)=>Object(ue.f)(A.a,{canEdit:!0,title:e,onSaveTitle:t,extraClasses:["datasource-sql-expression"],multiLine:!0}),description:(e,t,a)=>Object(ue.f)(ke,{label:a,formElement:Object(ue.f)(B.a,{value:e,onChange:t})}),d3format:(e,t,a)=>Object(ue.f)(ke,{label:a,formElement:Object(ue.f)(B.a,{value:e,onChange:t})})},allowDeletes:!0})}render(){const{datasource:e,activeTabKey:t}=this.state;return Object(ue.f)(ve,null,this.renderErrors(),Object(ue.f)("div",{className:"m-t-10"},Object(ue.f)(S.a,{bsStyle:"warning"},Object(ue.f)("strong",null,Object(D.e)("Be careful.")," "),Object(D.e)("Changing these settings will affect all charts using this dataset, including charts owned by other people."))),Object(ue.f)(k.c,{fullWidth:!1,id:"table-tabs",onChange:this.handleTabSelect,defaultActiveKey:t},Object(ue.f)(k.c.TabPane,{key:0,tab:Object(D.e)("Source")},this.renderSourceFieldset()),Object(ue.f)(k.c.TabPane,{tab:Object(ue.f)(De,{collection:e.metrics,title:Object(D.e)("Metrics")}),key:1},this.renderMetricCollection()),Object(ue.f)(k.c.TabPane,{tab:Object(ue.f)(De,{collection:this.state.databaseColumns,title:Object(D.e)("Columns")}),key:2},Object(ue.f)("div",null,Object(ue.f)(Ie,{columns:this.state.databaseColumns,onChange:e=>this.setColumns({databaseColumns:e})}),Object(ue.f)(N.a,{buttonStyle:"primary",onClick:this.syncMetadata,className:"sync-from-source"},Object(D.e)("Sync columns from source")),this.state.metadataLoading&&Object(ue.f)(q.a,null))),Object(ue.f)(k.c.TabPane,{tab:Object(ue.f)(De,{collection:this.state.calculatedColumns,title:Object(D.e)("Calculated Columns")}),key:3},Object(ue.f)(Ie,{columns:this.state.calculatedColumns,onChange:e=>this.setColumns({calculatedColumns:e}),editableColumnName:!0,showExpression:!0,allowAddItem:!0,allowEditDataType:!0,itemGenerator:()=>({column_name:"<new column>",filterable:!0,groupby:!0,expression:"<enter SQL expression here>",__expanded:!0})})),Object(ue.f)(k.c.TabPane,{key:4,tab:Object(D.e)("Settings")},Object(ue.f)("div",null,Object(ue.f)(x.a,{md:6},Object(ue.f)(Ne,null,this.renderSettingsFieldset())),Object(ue.f)(x.a,{md:6},Object(ue.f)(Ne,null,this.renderAdvancedFieldset()))))))}}Le.defaultProps={onChange:()=>{}},Le.propTypes=Me;t.default=Object(ye.a)(Le)},3387:function(e,t,a){},620:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));a(34);var n=a(337),l=a.n(n),s=a(0),o=a(3),c=a.n(o),i=a(7),r=a(119),d=a(1);function b({canEdit:e=!1,emptyText:t,extraClasses:a,multiLine:n=!1,noPermitTooltip:o,onSaveTitle:b,showTooltip:h=!0,style:u,title:p}){const[f,m]=Object(s.useState)(!1),[O,j]=Object(s.useState)(p),[g,y]=Object(s.useState)(p),[C,v]=Object(s.useState)(null),x=Object(s.useRef)();function S(){if(!e||f)return;const t=x.current?x.current.getBoundingClientRect():null;m(!0),v(t)}function _(){const t=l()(O).call(O);e&&(m(!1),t.length?(g!==t&&y(t),p!==t&&b(t)):j(g))}function E(e){" "===e.key&&e.stopPropagation()}function w(t){e&&j(t.target.value)}function T(e){"Enter"===e.key&&(e.preventDefault(),_())}let D;Object(s.useEffect)(()=>{p!==O&&(y(O),j(p))},[p]),O?D=O:f||(D=t);const I=f&&C?{height:`${C.height}px`}:void 0;let k=n&&f?Object(d.f)("textarea",{ref:x,required:!0,value:D,className:p?void 0:"text-muted",onKeyDown:E,onChange:w,onBlur:_,onClick:S,onKeyPress:T,style:I}):Object(d.f)("input",{ref:x,required:!0,type:f?"text":"button",value:D,className:p?void 0:"text-muted",onKeyDown:E,onChange:w,onBlur:_,onClick:S,onKeyPress:T});return h&&!f&&(k=Object(d.f)(r.a,{label:"title",tooltip:e?Object(i.e)("click to edit"):o||Object(i.e)("You don't have the rights to alter this title.")},k)),e||(k=Object(d.f)("span",{title:D},D)),Object(d.f)("span",{className:c()("editable-title",a,e&&"editable-title--editable",f&&"editable-title--editing"),style:u},k)}},834:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(2),o=a.n(s),c=a(119),i=(a(1425),a(1));const r={onClick:o.a.func,tooltipContent:o.a.string.isRequired};class d extends l.a.PureComponent{render(){return Object(i.f)(c.a,{tooltip:this.props.tooltipContent,label:"cache-desc"},Object(i.f)("i",{"aria-label":"Icon",role:"button",tabIndex:0,className:"RefreshLabel fa fa-refresh pointer",onClick:this.props.onClick}))}}d.propTypes=r,t.a=d},985:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(7),o=a(62),c=a(31),i=a(119),r=a(1);t.a=function({certifiedBy:e,details:t,size:a=24}){return Object(r.f)(i.a,{label:"certified-details",tooltip:Object(r.f)(l.a.Fragment,null,e&&Object(r.f)("div",null,Object(s.e)("Certified by %s",e)),Object(r.f)("div",null,t))},Object(r.f)(c.a,{color:o.d.colors.primary.base,height:a,width:a,name:"certified"}))}}}]);