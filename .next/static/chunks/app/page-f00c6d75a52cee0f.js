(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3183:function(e,t,r){Promise.resolve().then(r.bind(r,8685))},8685:function(e,t,r){"use strict";r.r(t);var l=r(7437),o=r(2265);t.default=()=>{let[e,t]=(0,o.useState)([]),[r,s]=(0,o.useState)("");(0,o.useEffect)(()=>{let e=localStorage.getItem("todos");e&&t(JSON.parse(e))},[]);let n=r=>{let l=e.filter(e=>e.id!==r);t(l),localStorage.setItem("todos",JSON.stringify(l))},c=r=>{let l=e.map(e=>(e.id===r&&(e.completed=!e.completed),e));t(l),localStorage.setItem("todos",JSON.stringify(l))};return(0,l.jsxs)("div",{className:"h-full w-full flex justify-center items-center flex-col space-y-10",children:[(0,l.jsxs)("div",{className:"p-4 flex flex-col space-y-2 text-black",children:[(0,l.jsx)("textarea",{value:r,onChange:e=>s(e.target.value),className:"p-4 rounded border border-solid border-gray-800"}),(0,l.jsx)("button",{className:"p-4 ml-4 bg-violet-700 rounded hover:bg-violet-900 text-white font-bold",onClick:()=>{let l={id:Math.random(),title:r,completed:!1};t([...e,l]),s(""),localStorage.setItem("todos",JSON.stringify([...e,l]))},children:"Add Todo"})]}),(0,l.jsx)("div",{className:"flex flex-col w-full justify-center items-center",children:e.map(e=>(0,l.jsxs)("div",{className:"flex justify-between items-center w-1/3 my-2 bg-gray-600 p-4 bg-opacity-30 border border-solid border-gray-800 rounded",children:[(0,l.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,l.jsx)("input",{type:"checkbox",checked:e.completed,onChange:()=>{c(e.id)},className:"h-6 w-6"}),(0,l.jsx)("div",{className:"text-xl font-semibold ml-2 ".concat(e.completed?"line-through":""),children:e.title})]}),(0,l.jsx)("button",{onClick:()=>{n(e.id)},className:"bg-red-600 p-2 rounded hover:bg-red-800 text-white font-bold",children:"Delete"})]}))})]})}},622:function(e,t,r){"use strict";var l=r(2265),o=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var l,a={},i=null,d=null;for(l in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,l)&&!c.hasOwnProperty(l)&&(a[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===a[l]&&(a[l]=t[l]);return{$$typeof:o,type:e,key:i,ref:d,props:a,_owner:n.current}}t.jsx=a,t.jsxs=a},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=3183)}),_N_E=e.O()}]);