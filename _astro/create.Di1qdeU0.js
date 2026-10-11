import{i as e,r as t}from"./env.DwfaFKTw.js";import{n}from"./loop.C-cxqx9R.js";import{i as r,s as i}from"./motion.Nyi-cDQK.js";import{Dn as a,En as o,Et as s,F as c,Jn as l,St as u,Yn as d,Z as f,_r as p,c as m,er as h,gr as g,lt as _,mr as v,p as y,s as b,u as x,wt as S}from"./three.core.DK3Y3pbj.js";import{n as C,r as ee}from"./renderer.BmjpyV-h.js";import{t as w}from"./GLTFLoader.bG5-NzfX.js";import{a as te,c as T,o as ne,s as E}from"./jarvis-tabs.BzkcJnmh.js";var D=1e3,re=.48,O=(e,t)=>1-(1-e)**(t*60);function ie(){let e=new u(35,1,1,4e3);e.position.set(0,0,D);let t=new c,n=new c;t.add(n);let i=1,a=1,o=null,s=1,l=.2,d=-.12,f=null,p=0,m=!1,h={x:0,y:0,z:0},_={x:0,y:0,z:0},y=null,b=1,x=0,S=0,C=0,ee=1,w=0,te=1,T=0,ne=()=>{if(!o)return{x:0,y:0,w:i,h:a};let e=s;return{x:g(o.x,0,e),y:g(o.y,0,e),w:g(o.w,i,e),h:g(o.h,a,e)}},E=()=>{let t=ne();b=Math.min(t.w,t.h)/620*g(1,r.focusScale,p);let n=i<=r.narrowMaxW;x=t.x+t.w*g(.5,n?.5:r.focusX,p),S=t.y+t.h*g(re,n?r.focusYNarrow:.5,p);let o=Math.max(1,D*b);e.fov=2*Math.atan(a/2/o)*(180/Math.PI),e.setViewOffset(i,a,i/2-x,a/2-S,i,a)},ie=()=>{ee=Math.cos(l),w=Math.sin(l),te=Math.cos(d),T=Math.sin(d),t.rotation.set(-d,l,0),n.position.set(-h.x*p,h.y*p-C,-h.z*p)};return{camera:e,content:n,root:t,setViewport:(e,t)=>{i=Math.max(1,e),a=Math.max(1,t),E()},setWindowRect:e=>{o=e,E()},setFraming:e=>{s=v(e),E()},setFocus:(e,t)=>{_.x=e?.x??0,_.y=e?.y??0,_.z=e?.z??0,f=t},setZoom:(e,t=!1)=>{m=e,t&&(p=+!!e,h.x=_.x,h.y=_.y,h.z=_.z,f!==null&&(l=f,f=null))},update:(e,t,n)=>{if(f!==null){let t=f-l;t=Math.atan2(Math.sin(t),Math.cos(t)),n.still||Math.abs(t)<.002?(l=f,f=null):l+=t*O(r.angleLerp,e)}else!y&&!n.selected&&!n.still&&(l+=r.autorotate*e*60);let i=n.still?1:O(r.zoomLerp,e);p+=(+!!m-p)*i,p<5e-4&&(p=0),p>.9995&&(p=1);let a=n.still?1:O(.07,e);h.x+=(_.x-h.x)*a,h.y+=(_.y-h.y)*a,h.z+=(_.z-h.z)*a,C=n.still?0:Math.sin(t*.5)*6*(1-p),E(),ie()},project:e=>{let t=e.x-h.x*p,n=e.y-h.y*p,r=e.z-h.z*p,i=t*ee+r*w,a=-t*w+r*ee,o=n+C,s=o*te-a*T,c=o*T+a*te,l=D/(D-c);return{sx:x+i*l*b,sy:S+s*l*b,k:l,z:c}},beginDrag:()=>{y={ang:l,pitch:d}},dragBy:(e,t)=>{y&&(l=y.ang+e*r.dragYaw,d=v(y.pitch+t*r.dragPitch,-r.pitchClamp,r.pitchClamp),f=null)},endDrag:()=>{y=null},get dragging(){return y!==null},get zf(){return p},get scale(){return b},get angle(){return l},dispose:()=>{t.clear(),n.clear()}}}var k=new Map;async function A(e){let t=k.get(e);if(t!==void 0)return t;let n=await fetch(e,{headers:{Accept:`text/html`}});if(!n.ok)throw Error(`route fetch failed: ${n.status} ${e}`);let r=new DOMParser().parseFromString(await n.text(),`text/html`).querySelector(`[data-route-root]`);if(!r)throw Error(`[data-route-root] 없음: ${e}`);let i=r.innerHTML;return k.set(e,i),i}function j(e){k.has(e)||A(e).catch(()=>void 0)}function ae(e,t){history.pushState(t,``,e)}function M(e,t){history.replaceState(t,``,e)}function N(e){let t=t=>e(t.state??null);return window.addEventListener(`popstate`,t),()=>window.removeEventListener(`popstate`,t)}function P(e){e?document.body.setAttribute(`data-scroll-lock`,``):document.body.removeAttribute(`data-scroll-lock`)}var F=new d(0,.06,.12),I=.042,L=.16,oe=[[-.55,-.45],[.55,-.45],[-.55,.45],[.55,.45]];function se(){let t=new o,n=new u(35,1,.1,40);n.position.set(0,0,4);let i={uScanL:{value:-999},uBoost:{value:1},uColor:{value:new y(240/255,240/255,250/255)}},s=new a({uniforms:i,transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:`
      attribute vec2 aMeta;   // x: 0 가로 단면 / 1 세로 단면, y: 단면 번호
      uniform float uScanL;
      uniform float uBoost;
      varying float vAlpha;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

        float fz = normalize(normalMatrix * normal).z;

        // 가장자리 페이드 — 프로토타입 ef. 프로토타입은 y 가 아래라 부호가 반대였다.
        float ef = min(
          min(1.0, (0.92 - position.y) / 0.3),
          min((0.66 + position.y) / 0.25, (0.6 - abs(position.x)) / 0.2)
        );

        float lv;
        if (aMeta.x > 0.5) {
          lv = fz > 0.5 ? 1.0 : 0.0;                       // 세로 단면은 은은하게만
        } else if (abs(aMeta.y - uScanL) < 0.5) {
          lv = 4.0;                                        // 스캔 라인이 지나는 단면
        } else {
          lv = fz > 0.7 ? 3.0 : fz > 0.4 ? 2.0 : fz > 0.1 ? 1.0 : 0.0;
        }
        lv = min(lv, floor(max(0.0, ef) * 4.99));

        float a = lv < 0.5 ? 0.06
                : lv < 1.5 ? 0.16
                : lv < 2.5 ? 0.32
                : lv < 3.5 ? 0.58 : 1.0;
        a = min(1.0, a * uBoost);
        if (fz < -0.12 || ef <= 0.02) a = 0.0;
        vAlpha = a;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        if (vAlpha <= 0.0) discard;
        gl_FragColor = vec4(uColor, vAlpha);
      }
    `}),l=new c;t.add(l);let h=null,g=null,_=!1,v=!1,x=e=>{let t=0;for(let n of e)t+=n.object.geometry.getAttribute(`position`).count;if(t===0)return;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*2),a=new d,o=0;for(let t of e){t.object.updateWorldMatrix(!0,!1);let e=t.object.geometry.getAttribute(`position`),r=t.kind===0?I:L;for(let s=0;s<e.count;s++,o++)a.fromBufferAttribute(e,s).applyMatrix4(t.object.matrixWorld),n[o*3]=a.x,n[o*3+1]=a.y,n[o*3+2]=a.z,i[o*2]=t.kind,i[o*2+1]=t.kind===0?Math.round(-a.y/r):Math.round(a.x/r)}let c=new Map;for(let e=0;e<t;e++){let t=i[e*2]*4096+i[e*2+1],r=c.get(t);r||c.set(t,r={x:0,y:0,z:0,n:0}),r.x+=n[e*3],r.y+=n[e*3+1],r.z+=n[e*3+2],r.n++}for(let e=0;e<t;e+=2){let t=n[e*3],a=n[e*3+1],o=n[e*3+2],s=n[e*3+3],l=n[e*3+4],u=n[e*3+5],d=(t+s)/2,f=(a+l)/2,p=(o+u)/2,m=i[e*2],h=c.get(m*4096+i[e*2+1]),g=h?h.x/h.n:0,_=h?h.y/h.n:0,v=h?h.z/h.n:0,y,b,x;if(m===0)y=u-o,b=0,x=-(s-t),y*(d-g)+x*(p-v)<0&&(y=-y,x=-x);else{b=u-o,x=-(l-a),b*(f-_)+x*(p-v)<0&&(b=-b,x=-x);let e=Math.hypot(b,x)||1;b/=e,x/=e,y=d*.8}let S=Math.hypot(y,b,x);S<1e-6&&(y=d-F.x,b=f-F.y,x=p-F.z,S=Math.hypot(y,b,x)||1);for(let t of[e,e+1])r[t*3]=y/S,r[t*3+1]=b/S,r[t*3+2]=x/S}h=new m,h.setAttribute(`position`,new b(n,3)),h.setAttribute(`normal`,new b(r,3)),h.setAttribute(`aMeta`,new b(i,2)),g=new f(h,s),g.frustumCulled=!1,l.add(g),_=!0},S=new Promise(t=>{new w().load(e(`models/jarvis-face-contour.glb`),e=>{if(v)return t();let n=[];e.scene.traverse(e=>{let t=e;t.isLineSegments&&n.push({object:t,kind:+!!/vertical/i.test(t.name)})}),x(n),n.forEach(e=>e.object.geometry.dispose()),t()},void 0,e=>{console.error(`[jarvis] 얼굴 GLB 로드 실패`,e),t()})}),C={x:0,y:0};return{scene:t,camera:n,ready:S,get loaded(){return _},setFrame:(e,t,r,i,a)=>{let o=Math.max(1,r*1.15),s=t+.13*o;n.fov=2*Math.atan(a/2/(4*o))*(180/Math.PI),n.setViewOffset(i,a,i/2-e,a/2-s,i,a)},update:(e,t,n)=>{let a=r.lookHoldMs/1e3,o=r.lookTurnMs/r.lookHoldMs,s=e/a,c=(Math.floor(s)%4+4)%4,u=p(Math.min(1,(s-Math.floor(s))/o)),d=oe[(c+3)%4],f=oe[c],m=n.locked||n.still?0:d[0]+(f[0]-d[0])*u,h=n.locked||n.still?0:d[1]+(f[1]-d[1])*u,g=n.still?1:1-(1-r.lookLerp)**(t*60);C.x+=(m-C.x)*g,C.y+=(h-C.y)*g;let _=.12*Math.sin(n.worldAngle*.7)+C.x*.32,v=C.y*.16-.04+(n.still?0:.015*Math.sin(e*.6));l.rotation.set(-v,_,0),i.uBoost.value=n.active?1.3:1;let y=n.active?.5:.2;i.uScanL.value=n.still?-999:Math.round((e*y%1*2.6-1.3)/I)},dispose:()=>{v=!0,g&&l.remove(g),h?.dispose(),s.dispose(),t.clear()}}}var ce=.5,le=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,ue=`
  uniform sampler2D uMap;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() { gl_FragColor = texture2D(uMap, vUv) * uOpacity; }
`,de=`
  uniform sampler2D uMap;
  uniform vec2 uStep;
  varying vec2 vUv;
  void main() {
    vec4 s = texture2D(uMap, vUv) * 0.2270270270;
    s += (texture2D(uMap, vUv + uStep * 1.3846153846) +
          texture2D(uMap, vUv - uStep * 1.3846153846)) * 0.3162162162;
    s += (texture2D(uMap, vUv + uStep * 3.2307692308) +
          texture2D(uMap, vUv - uStep * 3.2307692308)) * 0.0702702703;
    gl_FragColor = s;
  }
`,fe=`
  uniform vec2 uCenter;
  uniform float uRadius;
  uniform vec3 uColor;
  uniform float uInner;
  uniform vec2 uMid;
  void main() {
    float d = distance(gl_FragCoord.xy, uCenter) / max(uRadius, 1.0);
    if (d >= 1.0) discard;
    float a = d < uMid.x
      ? mix(uInner, uMid.y, d / uMid.x)
      : mix(uMid.y, 0.0, (d - uMid.x) / (1.0 - uMid.x));
    gl_FragColor = vec4(uColor, a);
  }
`,pe=`
  // position 은 좌표가 아니라 씨앗이다: (x0 0–1, y0 0–1, 크기 px)
  attribute vec2 aStar;   // (깊이 d, 위상)
  uniform vec2 uSize;
  uniform float uDpr;
  uniform float uAngle;
  uniform float uTime;
  uniform float uStill;
  varying float vAlpha;
  void main() {
    float x = mod(position.x * uSize.x + uAngle * 40.0 * aStar.x, uSize.x);
    float y = position.y * uSize.y;
    gl_Position = vec4(x / uSize.x * 2.0 - 1.0, 1.0 - y / uSize.y * 2.0, 0.0, 1.0);
    gl_PointSize = max(1.0, position.z * uDpr);
    float twinkle = mix(0.6 + 0.4 * sin(uTime * 0.8 + aStar.y), 1.0, uStill);
    vAlpha = 0.25 + 0.55 * aStar.x * twinkle;
  }
`,me=`
  uniform vec3 uColor;
  varying float vAlpha;
  void main() { gl_FragColor = vec4(uColor, vAlpha); }
`;function R({canvas:e,mode:r,onSelect:c}){let u=t(),d=C({canvas:e});d.autoClear=!1;let f=d.getPixelRatio(),p=ie(),g=E(),v=te(),w=se();p.content.add(g.object);let D=new o;D.add(p.root);let re=i.jarvis.count,O=new Float32Array(re*3),k=new Float32Array(re*2);{let e=7,t=()=>(e=e*16807%2147483647)/2147483647;for(let e=0;e<re;e++)O[e*3]=t(),O[e*3+1]=t(),O[e*3+2]=t()<.08?1.6:.6+t()*.7,k[e*2]=.2+t(),k[e*2+1]=t()*7}let A=new m;A.setAttribute(`position`,new b(O,3)),A.setAttribute(`aStar`,new b(k,2));let j={uSize:{value:new l(1,1)},uDpr:{value:f},uAngle:{value:0},uTime:{value:0},uStill:{value:+!!u},uColor:{value:new y(240/255,240/255,250/255)}},ae=new a({uniforms:j,vertexShader:pe,fragmentShader:me,transparent:!0,depthTest:!1,depthWrite:!1}),M=new s(A,ae);M.frustumCulled=!1,M.renderOrder=0,D.add(M);let N=new S(2,2),P={uCenter:{value:new l},uRadius:{value:1},uColor:{value:new y(240/255,240/255,250/255)},uInner:{value:.16},uMid:{value:new l(.35,.05)}},F=new a({uniforms:P,vertexShader:le,fragmentShader:fe,transparent:!0,depthTest:!1,depthWrite:!1}),I=new _(N,F);I.frustumCulled=!1,I.renderOrder=1,D.add(I);let L={uCenter:{value:new l},uRadius:{value:1},uColor:{value:new y(0,0,0)},uInner:{value:.7},uMid:{value:new l(.55,.4)}},oe=new a({uniforms:L,vertexShader:le,fragmentShader:fe,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:200,blendDst:205,blendSrcAlpha:200,blendDstAlpha:205}),R=new _(N,oe);R.frustumCulled=!1,R.renderOrder=5,D.add(R);let he=new o,ge=new x,z=new a({uniforms:{uMap:{value:null},uOpacity:{value:1}},vertexShader:le,fragmentShader:ue,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205}),B=new a({uniforms:{uMap:{value:null},uStep:{value:new l}},vertexShader:le,fragmentShader:de,depthTest:!1,depthWrite:!1}),_e=new _(N,z);_e.frustumCulled=!1,he.add(_e);let ve={depthBuffer:!1,stencilBuffer:!1},V=new h(1,1,ve),H=new h(1,1,ve),U=new h(1,1,ve),W=(e,t,n,r=1)=>{t.uniforms.uMap.value=n,t.uniforms.uOpacity&&(t.uniforms.uOpacity.value=r),_e.material=t,d.setRenderTarget(e),e&&d.clear(!0,!1,!1),d.render(he,ge)},ye=(e,t)=>{let n=t*f*ce/2/Math.SQRT2;W(H,z,e,1);for(let e=0;e<2;e++)B.uniforms.uStep.value.set(n/H.width,0),W(U,B,H.texture),B.uniforms.uStep.value.set(0,n/H.height),W(H,B,U.texture);return H.texture},G=document.createElement(`canvas`);G.setAttribute(`data-jarvis-overlay`,``);let be=getComputedStyle(e).position;G.style.position=be===`static`?`absolute`:be,G.style.inset=`0`,G.style.width=`100%`,G.style.height=`100%`,G.style.pointerEvents=`none`,e.parentElement?.insertBefore(G,e.nextSibling);let xe=G.getContext(`2d`);e.style.touchAction=`none`;let K=1,q=1,J=r,Y=null,X=null,Z=null,Se=!1,Ce=+(r===`full`),we=()=>{let t=Math.max(1,e.clientWidth||e.width),n=Math.max(1,e.clientHeight||e.height);if(t===K&&n===q)return;K=t,q=n,ee(d,p.camera,K,q),p.setViewport(K,q),G.width=Math.round(K*f),G.height=Math.round(q*f),xe?.setTransform(f,0,0,f,0,0),V.setSize(Math.round(K*f),Math.round(q*f));let r=Math.max(1,Math.round(K*f*ce)),i=Math.max(1,Math.round(q*f*ce));H.setSize(r,i),U.setSize(r,i),j.uSize.value.set(K*f,q*f),T(g,f)};we();let Q=(e,t=!1)=>{let n=e&&v.positionOf(e)?e:null;n&&p.setFocus(v.positionOf(n),v.angleFor(n)),p.setZoom(n!==null,t||u),n!==Y&&(Y=n,c?.(Y))},Te=t=>{let n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}},Ee=t=>{J===`full`&&(Z={x:t.clientX,y:t.clientY,moved:0},p.beginDrag(),e.setPointerCapture(t.pointerId),e.style.cursor=`grabbing`)},De=t=>{if(J!==`full`){X=null;return}if(Z){let e=t.clientX-Z.x,n=t.clientY-Z.y;Z.moved=Math.max(Z.moved,Math.abs(e)+Math.abs(n)),p.dragBy(e,n);return}let{x:n,y:r}=Te(t),i=v.pick(n,r,!Y);Y?(X=null,e.style.cursor=i&&v.canSelectWhileZoomed(i,Y)?`pointer`:`zoom-out`):(X=i,e.style.cursor=i?`pointer`:`grab`)},$=t=>{if(J!==`full`)return;let n=Z;if(Z=null,p.endDrag(),e.style.cursor=`grab`,!n||n.moved>=5)return;let{x:r,y:i}=Te(t),a=v.pick(r,i,!Y);if(Y){a&&v.canSelectWhileZoomed(a,Y)?Q(a):Q(null);return}a&&Q(a)},Oe=()=>{X=null},ke=e=>{e.key===`Escape`&&J===`full`&&Y&&(e.preventDefault(),e.stopPropagation(),Q(null))};e.addEventListener(`pointerdown`,Ee),e.addEventListener(`pointermove`,De),e.addEventListener(`pointerup`,$),e.addEventListener(`pointercancel`,$),e.addEventListener(`pointerleave`,Oe),document.addEventListener(`keydown`,ke,!0);let Ae=new ResizeObserver(we);Ae.observe(e);let je=n(e,(e,t)=>{if(Se)return;let n=u?0:t;p.update(e,n,{still:u,selected:Y!==null}),g.update(n,e,{still:u});let r=v.positionOf(`jarvis`),i=r?p.project(r):{sx:K/2,sy:q/2,k:1,z:0},a=64*i.k*p.scale,o=p.zf,s=Y??X,c=ne(Y,o);w.setFrame(i.sx,i.sy,a,K,q),w.update(n,e,{still:u,worldAngle:p.angle,locked:Y!==null,active:s===`jarvis`}),j.uAngle.value=p.angle,j.uTime.value=n,P.uCenter.value.set(i.sx*f,(q-i.sy)*f),P.uRadius.value=360*p.scale*f,L.uCenter.value.set(i.sx*f,(q-i.sy)*f),L.uRadius.value=110*p.scale*f,d.setRenderTarget(V),d.clear(!0,!1,!1),d.render(D,p.camera);let l=o>.02?ye(V.texture,o*6):V.texture;if(d.setRenderTarget(null),d.clear(!0,!1,!1),W(null,z,l,1-.45*o),w.loaded&&c>.01){d.setRenderTarget(V),d.clear(!0,!1,!1),d.render(w.scene,w.camera);let e=ye(V.texture,7);d.setRenderTarget(null),W(null,z,e,.55*c),W(null,z,V.texture,.72*c)}d.setRenderTarget(null);let m=+(J===`full`);Ce=u?m:Ce+(m-Ce)*(1-.92**(e*60)),xe&&v.draw(xe,p,{t:n,selected:Y,hover:X,w:K,h:q,labelAlpha:Ce})});return{setFraming:e=>p.setFraming(e),setWindowRect:t=>{if(we(),!t){p.setWindowRect(null);return}let n=e.getBoundingClientRect();p.setWindowRect({x:t.left-n.left,y:t.top-n.top,w:t.width,h:t.height})},setMode:e=>{J=e,we(),e===`preview`&&(X=null,Z=null,p.endDrag(),Q(null))},select:Q,get selected(){return Y},dispose:()=>{Se=!0,je(),Ae.disconnect(),e.removeEventListener(`pointerdown`,Ee),e.removeEventListener(`pointermove`,De),e.removeEventListener(`pointerup`,$),e.removeEventListener(`pointercancel`,$),e.removeEventListener(`pointerleave`,Oe),document.removeEventListener(`keydown`,ke,!0),G.remove(),g.dispose(),v.dispose(),w.dispose(),p.dispose(),A.dispose(),ae.dispose(),N.dispose(),F.dispose(),oe.dispose(),z.dispose(),B.dispose(),V.dispose(),H.dispose(),U.dispose(),D.clear(),he.clear(),d.dispose()}}}export{j as a,N as i,A as n,ae as o,P as r,M as s,R as t};