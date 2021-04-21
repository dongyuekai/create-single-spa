import { registerApplication, start } from "single-spa";

// 注册微应用
// name:
// app:函数类型 返回Promise 通过systemJS引用打包好的微前端应用模块代码（umd）
// activeWhen 路由匹配时激活应用
// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });
registerApplication(
  "@single-spa/welcome",
  () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  location => location.pathname === '/'
),
  registerApplication({
    name: "@single-spa/todos",
    app: () =>
      System.import(
        "@study/todos"
      ),
    activeWhen: ["/todos"],
  });

// registerApplication({
//   name: "@study/navbar",
//   app: () => System.import("@study/navbar"),
//   activeWhen: ["/"]
// });

start({
  // 是否可以通过history.pushState()和history.replaceState()的方式来更改路由 true/false
  urlRerouteOnly: true,
});
