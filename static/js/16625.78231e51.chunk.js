"use strict";(self.webpackChunkn2_tree=self.webpackChunkn2_tree||[]).push([[16625],{7342:(e,o,t)=>{t.d(o,{Cc:()=>s,Qo:()=>d,CC:()=>u,RF:()=>c});var n=t(69539),r=(t(81806),t(76931)),a=t(55855);var l=t(46702),i=t(28014);function c(e){return e&&e.enabled&&(function(e){return"extrude"===e.type}(e)||function(e){return"fill"===e.type}(e))&&null!=e.edges}function s(e,o){return d(function(e){return e&&e.enabled&&e.edges||null}(e),o)}function d(e,o){if(null==e)return null;const t=null!=e.color?(0,a.ci)(n.default.toUnitRGBA(e.color)):(0,a.fA)(0,0,0,0),l=(0,r.Lz)(e.size),c=(0,r.Lz)(e.extensionLength);switch(e.type){case"solid":return u({color:t,size:l,extensionLength:c,...o});case"sketch":return s={color:t,size:l,extensionLength:c,...o},{...m,...s,type:i.gP.Sketch};default:return}var s}function u(e){return{...f,...e,type:i.gP.Solid}}const f={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.x.OPAQUE,hasSlicePlane:!1},m={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.x.OPAQUE,hasSlicePlane:!1}},12482:(e,o,t)=>{t.d(o,{$7:()=>S,B:()=>T,Fo:()=>w,M7:()=>A,NN:()=>f,Q5:()=>M,Tq:()=>_,Up:()=>b,XF:()=>R,Ze:()=>x,bK:()=>i,bh:()=>u,id:()=>g,ky:()=>d,qt:()=>P,tW:()=>E,v9:()=>m,w7:()=>c,wF:()=>l,wS:()=>C,wz:()=>p,x:()=>v,xS:()=>y,ze:()=>s});var n=t(31633),r=t(59097);function a(e){return e?P:_}function l(e,o){return o?.mode?o.mode:a(e).mode}function i(e,o){return null!=o?o:a(e)}function c(e,o){return l(null==e||(e.hasZ??!1),o)}function s(e,o){return i(null==e||(e.hasZ??!1),o)}function d(e){const o=h(e);return c(e.geometry,o)}function u(e){const o=h(e),t=c(e.geometry,o),n=null!=o&&"on-the-ground"!==t?A(o):0,r=o?.featureExpressionInfo;return{mode:t,offset:n,featureExpressionInfo:r}}function f(e){return p(u(e))}function m(e){return p(e)||v(e)}function v(e){return"0"===e?.featureExpressionInfo?.expression}function p(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const o=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!o||"0"===o)}function h(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function x(e,o){if(!e?.offset)return 0;const{offset:t,unit:r}=e;if("decimal-degrees"===r)return 0;const a="unknown"!==r&&r?r:"meters",l=(0,n.mq)(o);return l?(0,n.oU)(t,a,l):0}function g(e,o,t){if(!t?.mode)return;const n=e.hasZ?e.z:0,r=x(t,e.spatialReference);switch(t.mode){case"absolute-height":return n-r;case"on-the-ground":return 0;case"relative-to-ground":return n-((o.elevationProvider.getElevation(e.x,e.y,n,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return n-((o.elevationProvider.getElevation(e.x,e.y,n,e.spatialReference,"scene")??0)+r)}}function C(e,o,t){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return w(e,o.x,o.y,o.hasZ?o.z:0,o.spatialReference,t,n)}function y(e,o,t,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return w(e,o[0],o[1],o.length>2?o[2]:0,t,n,r)}function w(e,o,t,n,r,a){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==a)return;const i=null!=l?l.mode:"absolute-height";if("on-the-ground"===i)return 0;const{absoluteZ:c}=M(o,t,n,r,e,a);return function(e,o,t,n,r,a,l,i){const c=x(l,r);switch(i){case"absolute-height":return e-c;case"relative-to-ground":return e-((a.elevationProvider.getElevation(o,t,n,r,"ground")??0)+c);case"relative-to-scene":return e-((a.elevationProvider.getElevation(o,t,n,r,"scene")??0)+c)}}(c,o,t,n,r,e,l,i)}function M(e,o,t,n,r,a){const l=x(a,n);switch(a.mode){case"absolute-height":return{absoluteZ:t+l,elevation:0};case"on-the-ground":{const t=r.elevationProvider.getElevation(e,o,0,n,"ground")??0;return{absoluteZ:t,elevation:t}}case"relative-to-ground":{const a=r.elevationProvider.getElevation(e,o,t,n,"ground")??0;return{absoluteZ:t+a+l,elevation:a}}case"relative-to-scene":{const a=r.elevationProvider.getElevation(e,o,t,n,"scene")??0;return{absoluteZ:t+a+l,elevation:a}}}}function b(e,o){if(null==o)return!1;const{mode:t}=o;return null!=t&&("scene"===e&&"relative-to-scene"===t||"ground"===e&&"absolute-height"!==t)}function T(e,o,t){return t&&t.mode!==o?`${e} only support ${o} elevation mode`:null}function S(e,o,t){return t?.mode===o?`${e} do not support ${o} elevation mode`:null}function E(e,o){return null!=o?.featureExpressionInfo&&"0"!==o.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function R(e,o){o&&e.warn(".elevationInfo=",o)}function A(e){return(e?.offset??0)*(0,r.Ao)(e?.unit)}const P={mode:"absolute-height",offset:0},_={mode:"on-the-ground",offset:null}},13545:(e,o,t)=>{t.d(o,{cz:()=>y,Sg:()=>m,B:()=>C,Hi:()=>g});var n=t(4212),r=t(14522),a=t(59581),l=t(34981),i=t(81449),c=t(20123),s=t(86955),d=t(69728),u=t(87003);class f extends u.n{constructor(e,o){super(e,"int",d.c.Draw,((t,n,r)=>t.setUniform1i(e,o(n,r))))}}var m,v,p=t(27374),h=t(61785),x=t(66470);(v=m||(m={}))[v.Uniform=0]="Uniform",v[v.Varying=1]="Varying",v[v.COUNT=2]="COUNT";const g=429496.7296;function C(e,o){(0,r.U)(e/g*.5+.5,o)}function y(e,o){switch(o.componentData){case m.Varying:return function(e,o){const{vertex:t,fragment:n}=e;t.include(i.W),t.uniforms.add(new p.o("componentColorTex",(e=>e.componentParameters.texture.texture))),e.attributes.add(x.r.COMPONENTINDEX,"float"),e.varyings.add("vExternalColorMixMode","mediump float"),e.varyings.add("vExternalColor","vec4");const r=o.output===l.V.ObjectAndLayerIdColor;r&&e.varyings.add("vObjectAndLayerIdColor","vec4"),e.include(a.A),t.constants.add("stride","float",(0,h.E)()?3:2),t.code.add(s.H`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),t.code.add(s.H`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${s.H.float(g)};
  }

  ${r?s.H`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:s.H`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`),n.code.add(s.H`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${r?s.H`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}(e,o);case m.Uniform:return function(e,o){const{vertex:t,fragment:n}=e;e.varyings.add("vExternalColor","vec4"),t.uniforms.add(new c.V("externalColor",(e=>e.componentParameters.externalColor))).code.add(s.H`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const r=o.output===l.V.ObjectAndLayerIdColor;n.uniforms.add(new f("externalColorMixMode",(e=>e.componentParameters.externalColorMixMode))).code.add(s.H`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${(0,s.If)(r,"fragColor = vec4(0, 0, 0, 0);")}
    }
  `)}(e,o);case m.COUNT:return;default:(0,n.Xb)(o.componentData)}}},14487:(e,o,t)=>{t.d(o,{F:()=>a});t(9624);var n=t(13312),r=t(64232);function a(e,o,t,n,a){return!(null==o||null==n||e.length<2)&&(l.x=e[0],l.y=e[1],l.z=e[2],l.spatialReference=o,(0,r.g)(l,t,n,a))}const l=(0,t(18117).T)(0,0,0,n.default.WGS84)},18117:(e,o,t)=>{function n(e,o,t,n){return{x:e,y:o,z:t,hasZ:null!=t,hasM:!1,spatialReference:n,type:"point"}}function r(e,o,t,n,r){e.x=o,e.y=t,e.z=n,e.hasZ=null!=n,e.spatialReference=r}t.d(o,{J:()=>r,T:()=>n})},28014:(e,o,t)=>{t.d(o,{E7:()=>g,gP:()=>n,s0:()=>r,zP:()=>C});var n,r,a,l=t(13545),i=t(59046),c=t(89299),s=t(81449),d=t(72468),u=t(5517),f=t(86955),m=t(42759),v=t(72106),p=t(23687),h=t(27374),x=t(66470);function g(e,o){const t=e.vertex;t.include(s.W),e.include(i.Y,o);const{silhouette:n,legacy:r,spherical:a}=o;t.uniforms.add(new h.o("componentDataTex",(e=>e.componentDataTexture))),e.attributes.add(x.r.COMPONENTINDEX,"float");t.constants.add("lineWidthFractionFactor","float",8),t.constants.add("extensionLengthOffset","float",128),t.code.add(f.H`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = ${f.H.float(3)}  * componentIndex + fieldOffset;
      float texSize = float(textureSize(componentDataTex, 0).x);
      float colIndex = mod(fieldIndex, texSize);
      float rowIndex = floor(fieldIndex / texSize);

      return vec2(colIndex, rowIndex) + 0.5;
    }

    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, ${f.H.float(0)});
      vec2 otherIndex = _componentTextureCoords(componentIndex, ${f.H.float(1)});
      vec2 verticalOffsetIndex = _componentTextureCoords(float(componentIndex), ${f.H.float(2)} );
      vec3 normal = normalModel();
      vec3 normal2 = ${n?f.H`decompressNormal(normal2Compressed)`:f.H`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${f.H.float(l.Hi)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / ${f.H.float(8)} ),
        otherValue.y * 255.0 - ${f.H.float(128)},
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),r?t.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(t.uniforms.add(new m.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),t.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),n?(e.attributes.add(x.r.NORMAL2COMPRESSED,"vec2"),t.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):t.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),r?t.code.add(f.H`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(t.include(c.u,o),t.uniforms.add(new v.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new d.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new d.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new u.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new u.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))),t.code.add(f.H`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${a?"normalize(transformWorldFromModelTL + rotatedModelPosition);":"vec3(0.0, 0.0, 1.0);"}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),t.uniforms.add(new p.F("transformProjFromView",(e=>e.camera.projectionMatrix))).code.add(f.H`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),t.code.add(f.H`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function C(e){return e===n.Sketch||e===n.Mixed}(a=n||(n={}))[a.Solid=0]="Solid",a[a.Sketch=1]="Sketch",a[a.Mixed=2]="Mixed",a[a.COUNT=3]="COUNT",function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(r||(r={}))},37431:(e,o,t)=>{t.d(o,{Gc:()=>c,RI:()=>d,Z4:()=>s,dk:()=>f,vr:()=>u});var n=t(76931),r=t(19555),a=t(20664),l=t(95925),i=t(75762);function c(e,o){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,l.vt)();return s(e,(0,n.WA)(o),t),(0,a.n)(t.direction,t.direction),t}function s(e,o,t){return d(e,e.screenToRender(o,(0,n.sc)(i.rq.get())),t)}function d(e,o,t){const l=(0,n.sc)((0,r.C)(i.rq.get(),o));if(l[2]=0,!e.unprojectFromRenderScreen(l,t.origin))return null;const c=(0,n.sc)((0,r.C)(i.rq.get(),o));c[2]=1;const s=e.unprojectFromRenderScreen(c,i.rq.get());return null==s?null:((0,a.d)(t.direction,s,t.origin),t)}function u(e,o,t){return f(e,e.screenToRender(o,(0,n.sc)(i.rq.get())),t)}function f(e,o,t){(0,a.c)(t.origin,e.eye);const n=(0,a.i)(i.rq.get(),o[0],o[1],1),r=e.unprojectFromRenderScreen(n,i.rq.get());return null==r?null:((0,a.d)(t.direction,r,t.origin),t)}},44680:(e,o,t)=>{function n(){return[1,0,0,0,1,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function a(e,o,t,n,r,a,l,i,c){return[e,o,t,n,r,a,l,i,c]}t.d(o,{fA:()=>a,o8:()=>r,vt:()=>n,zK:()=>l});const l=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:l,clone:r,create:n,createView:function(e,o){return new Float64Array(e,o,9)},fromValues:a},Symbol.toStringTag,{value:"Module"}))},46702:(e,o,t)=>{var n;t.d(o,{x:()=>n}),function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(n||(n={}))},51990:(e,o,t)=>{t.d(o,{Eb:()=>l,_j:()=>i,k5:()=>n});var n,r,a=t(15941);function l(e){switch(e){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function i(e,o,t){if(null==e||o===n.Ignore)return t[0]=255,t[1]=255,t[2]=255,void(t[3]=255);const r=(0,a.qE)(Math.round(e[3]*s),0,s),l=0===r||o===n.Tint?0:o===n.Replace?d:u;t[0]=(0,a.qE)(Math.round(e[0]*c),0,c),t[1]=(0,a.qE)(Math.round(e[1]*c),0,c),t[2]=(0,a.qE)(Math.round(e[2]*c),0,c),t[3]=r+l}(r=n||(n={}))[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint";const c=255,s=85,d=s,u=2*s},58229:(e,o,t)=>{t.d(o,{I:()=>l,_:()=>i});var n=t(50076),r=(t(81806),t(75941)),a=t(6485);class l{constructor(e){this.context=e,this._debug=!1,this._precompiling=this._debug?0:1,this._cache=new r.O}get precompiling(){return this._precompiling}set precompiling(e){this._precompiling=e,0===e&&this.context.rctx.gl.flush()}get viewingMode(){return this.context.viewingMode}destroy(){this._cache.forAll((e=>e.destroy())),this._cache.clear()}precompile(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;++this.precompiling,this.get(e,o),--this.precompiling}get(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;const t=o.key.code;let r=this._cache.get(e,t);if(null==r){if(0===this._precompiling){let t=`Uncached shader compile in ${(new Error).stack}\n  for configuration\n${o.decode()}`;const r=this._cache.getInner(e);throw r?.size&&(t+="\n\n  cached configurations:\n",t+=Array.from(r.values()).map((e=>o.decode(e.key))).sort().join("\n\n")),console.log(t),new n.default(t)}r=new e(this.context,o),this._cache.set(e,t,r)}return r}async reloadAll(){const e=new Array;this._cache.forEach((o=>e.push(async function(e){let o=!0;e.forEach((async e=>{await e.reload(o),o=!1}))}(o)))),await Promise.all(e)}}const i=new a.K},59046:(e,o,t)=>{t.d(o,{W:()=>n,Y:()=>c});var n,r,a=t(4212),l=t(86955),i=t(66470);function c(e,o){switch(o.normalType){case n.Compressed:e.attributes.add(i.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(l.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case n.Attribute:e.attributes.add(i.r.NORMAL,"vec3"),e.vertex.code.add(l.H`vec3 normalModel() {
return normal;
}`);break;case n.ScreenDerivative:e.fragment.code.add(l.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,a.Xb)(o.normalType);case n.COUNT:}}(r=n||(n={}))[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"},59581:(e,o,t)=>{t.d(o,{A:()=>a});var n=t(51990),r=t(86955);function a(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(n.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(n.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(n.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(n.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},60216:(e,o,t)=>{t.d(o,{C:()=>i,E:()=>l});var n=t(9392),r=t(9624),a=t(14487);function l(e,o,t){return!!(0,a.F)(e,o,c,t.spatialReference)&&(t.x=c[0],t.y=c[1],t.z=c[2],!0)}async function i(e,o,t,n){return await(0,r.initializeProjection)(o,t.spatialReference,null,n),l(e,o,t)}const c=(0,n.vt)()},64232:(e,o,t)=>{t.d(o,{W:()=>i,g:()=>l});var n=t(9392),r=t(9624),a=t(45308);function l(e,o,t,n){if((0,r.canProjectWithoutEngine)(e.spatialReference,t)){c[0]=e.x,c[1]=e.y;const r=e.z;return c[2]=r??n??0,(0,a.projectBuffer)(c,e.spatialReference,0,o,t,0)}const l=(0,r.tryProjectWithZConversion)(e,t);return!!l&&(o[0]=l?.x,o[1]=l?.y,o[2]=l?.z??n??0,!0)}async function i(e,o,t,n,a){return await(0,r.initializeProjection)(e.spatialReference,t,null,a),l(e,o,t,n)}const c=(0,n.vt)()},74487:(e,o,t)=>{t.d(o,{d:()=>y});var n=t(15941),r=t(31633),a=t(34761),l=t(20664),i=t(34111),c=t(98510),s=t(64232),d=t(60216),u=t(14487),f=t(2413),m=t(5568),v=t(88954),p=t(13927),h=t(96190),x=t(75762),g=t(81284),C=t(64465);class y{constructor(e,o,t,n){this.viewingMode=e,this.spatialReference=o,this.unitInMeters=t,this._coordinateSystem=n,this._tmpCoordinateSystem=(0,v.vt)(n),this.referenceEllipsoid=(0,i.tO)(o),this.sphericalPCPF=(0,c.lO)(o)}set extent(e){e&&(0,v.b)(this._coordinateSystem,e,this._coordinateSystem)}get extent(){return(0,v.Z7)(this._coordinateSystem,(0,f.vt)())}getAltitude(e){return(0,v.US)(this._coordinateSystem,e)}setAltitude(e,o){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return(0,v.E$)(this._coordinateSystem,t,o,e)}setAltitudeOfTransformation(e,o){(0,v.Jq)(this._coordinateSystem,o,e,o)}worldUpAtPosition(e,o){return(0,v.jI)(this._coordinateSystem,e,o)}worldBasisAtPosition(e,o,t){return(0,v.vf)(this._coordinateSystem,e,o,t)}basisMatrixAtPosition(e,o){const t=this.worldBasisAtPosition(e,m._.X,x.rq.get()),n=this.worldBasisAtPosition(e,m._.Y,x.rq.get()),r=this.worldBasisAtPosition(e,m._.Z,x.rq.get());return(0,a.hZ)(o,t[0],t[1],t[2],0,n[0],n[1],n[2],0,r[0],r[1],r[2],0,0,0,0,1),o}headingAtPosition(e,o){const t=this.worldUpAtPosition(e,x.rq.get()),r=this.worldBasisAtPosition(e,m._.Y,x.rq.get()),a=(0,h.EJ)(o,r,t);return(0,n.KJ)(a)}intersectManifoldClosestSilhouette(e,o,t){return(0,v.xW)(this._coordinateSystem,o,this._tmpCoordinateSystem),(0,v.lt)(this._tmpCoordinateSystem,e,t),t}intersectManifold(e,o,t){(0,v.xW)(this._coordinateSystem,o,this._tmpCoordinateSystem);const n=x.rq.get();return(0,v.Ui)(this._tmpCoordinateSystem,e,n)?(0,l.c)(t,n):null}intersectInfiniteManifold(e,o,t){if(this.viewingMode===C.RT.Global)return this.intersectManifold(e,o,t);(0,v.xW)(this._coordinateSystem,o,this._tmpCoordinateSystem);const n=this._tmpCoordinateSystem.value,r=x.rq.get();return(0,p.Ui)(n.plane,e,r)?(0,l.c)(t,r):null}toRenderCoords(e,o,t){return(0,g.v)(e)?(0,s.g)(e,o,this.spatialReference):(0,u.F)(e,o,t,this.spatialReference)}fromRenderCoords(e,o){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(0,g.v)(o)?(null!=t&&(o.spatialReference=t),(0,d.E)(e,this.spatialReference,o)?o:null):(0,u.F)(e,this.spatialReference,o,t)?o:null}static create(e,o){switch(e){case C.RT.Local:return new y(C.RT.Local,o,(0,r.GA)(o),(0,v.oJ)());case C.RT.Global:return new y(C.RT.Global,o,1,(0,v.Sj)(o))}}static renderUnitScaleFactor(e,o){return(0,r.KX)(e)/(0,r.KX)(o)}}},75941:(e,o,t)=>{t.d(o,{O:()=>n});class n{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,o){return this._outer.get(e)?.get(o)}getInner(e){return this._outer.get(e)}set(e,o,t){const n=this._outer.get(e);n?n.set(o,t):this._outer.set(e,new Map([[o,t]]))}delete(e,o){const t=this._outer.get(e);t&&(t.delete(o),0===t.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((o,t)=>e(o,t)))}forAll(e){for(const o of this._outer.values())for(const t of o.values())e(t)}}},80935:(e,o,t)=>{t.d(o,{R1:()=>l,aY:()=>r,cN:()=>a});var n=t(81284);class r{constructor(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.array=e,this.spatialReference=o,this.offset=t}}function a(e){return"array"in e}function l(e,o){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ground";if((0,n.v)(o))return e.getElevation(o.x,o.y,o.z||0,o.spatialReference,t);if(a(o)){let n=o.offset;return e.getElevation(o.array[n++],o.array[n++],o.array[n]||0,o.spatialReference??e.spatialReference,t)}return e.getElevation(o[0],o[1],o[2]||0,e.spatialReference,t)}},88954:(e,o,t)=>{t.d(o,{E$:()=>T,Gs:()=>_,Jq:()=>S,PX:()=>A,Sj:()=>h,U9:()=>P,US:()=>b,Ui:()=>w,Z7:()=>v,b:()=>m,jI:()=>C,lt:()=>M,oJ:()=>g,vf:()=>y,vt:()=>f,xW:()=>E});var n=t(34761),r=t(20664),a=t(9392),l=t(34111),i=t(13312),c=t(98510),s=t(5568),d=t(79650),u=t(78315);function f(e){const{value:o,operations:t}=e;return{operations:t,value:t.create(o)}}function m(e,o,t){return e.operations.setExtent(e.value,o,t.value),t}function v(e,o){return e.operations.getExtent(e.value,o),o}function p(e,o){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return{operations:e,value:e.create()}}(e);return t.operations=e,e.copy(o,t.value),t}function h(e){return p(u.s,(0,u.f)(0,0,0,(0,l.tO)(e).radius))}const x=2**50;function g(){return p(d.b,(0,d.f)([0,0,0],[x,0,0],[0,x,0]))}function C(e,o,t){return e.operations.axisAt(e.value,o,s._.Z,t)}function y(e,o,t,n){return e.operations.axisAt(e.value,o,t,n)}function w(e,o,t){return e.operations.intersectRay(e.value,o,t)}function M(e,o,t){return e.operations.intersectRayClosestSilhouette(e.value,o,t)}function b(e,o){return e.operations.altitudeAt(e.value,o)}function T(e,o,t,n){return e.operations.setAltitudeAt(e.value,o,t,n)}function S(e,o,t,a){return o!==a&&(0,n.C)(a,o),(0,r.i)(R,a[12],a[13],a[14]),T(e,R,t,R),a[12]=R[0],a[13]=R[1],a[14]=R[2],a}function E(e,o,t){return e.operations.elevate(e.value,o,t.value)}const R=(0,a.vt)();function A(e,o,t,n,a){return a[0]=(0,r.f)(e,o),a[1]=(0,r.f)(e,t),a[2]=(0,r.f)(e,n),a}function P(e,o,t,n,a){(0,r.c)(t,e),(0,r.c)(I,o),(0,r.n)(I,I),(0,r.e)(n,I,t),(0,r.e)(a,n,t)}function _(e,o){return e?(0,c.lO)(o):o.isGeographic?i.default.PlateCarree:o}const I=(0,a.vt)()},90992:(e,o,t)=>{t.d(o,{E5:()=>i,JU:()=>l,Of:()=>r,Uk:()=>a,WK:()=>c,g7:()=>s,lO:()=>d,lQ:()=>u});var n=t(50076);function r(e){return e&&"function"==typeof e.highlight}function a(e){return e&&"function"==typeof e.maskOccludee}function l(e,o,t){return null==e||e>=t&&(0===o||e<=o)}function i(e,o){if(o&&e){const{minScale:t,maxScale:n}=e;if(c(t,n))return l(o,t,n)}return!0}function c(e,o){return null!=e&&e>0||null!=o&&o>0}function s(e){return!e?.minScale||!e.maxScale||e.minScale>=e.maxScale}function d(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatures"in e&&"layer"in e&&"view"in e}function u(e,o,t){return new n.default("layerview:spatial-reference-incompatible",`The spatial reference of this ${e}${o?`(wkid:${o})`:""} is incompatible with the spatial reference of the view${t?`(wkid:${t})`:""}.`,{})}}}]);
//# sourceMappingURL=16625.78231e51.chunk.js.map