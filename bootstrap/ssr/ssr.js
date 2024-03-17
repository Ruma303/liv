import { unref, withCtx, createVNode, useSSRContext, mergeProps, reactive, ref, watch, createTextVNode, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Head, useForm, router, Link, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$8 = {
  __name: "About",
  __ssrInlineRender: true,
  props: {
    someData: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>About</title><meta head-key="description" name="description" content="About page"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "About"),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: "About page"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col gap-2 mx-auto mt-2 px-4"><h1 class="text-4xl text-center mb-2">About page</h1><p class="font-semibold">Dati dal backend Laravel: </p><article>${ssrInterpolate(__props.someData ? __props.someData.join(" ") : "No data")}</article><pre>${ssrInterpolate(_ctx.$page)}</pre></div><!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "AdminDashboard",
  __ssrInlineRender: true,
  props: {
    auth: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2 mx-auto mt-2 px-4" }, _attrs))}><h1 class="text-4xl text-center mb-2">Dashboard</h1><p>Amministratore: <b>${ssrInterpolate(__props.auth)}</b></p><article class="text-xs text-justify mt-3"> Contenuto visibile soltanto agli amministratori </article></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AdminDashboard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    errors: Object
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Login</title>`);
          } else {
            return [
              createVNode("title", null, "Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-4xl text-center mt-4">Login</h1><form class="max-w-lg mx-auto mt-4"><div class="mb-6"><label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="email">Email: </label><input type="email" placeholder="La tua email..." name="email"${ssrRenderAttr("value", unref(form).email)} required class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400 w-full placeholder:italic">`);
      if (unref(form).errors.email) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(unref(form).errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-6"><label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="password">Password: </label><input type="password" placeholder="La tua password..." name="password"${ssrRenderAttr("value", unref(form).password)} required class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400 w-full placeholder:italic">`);
      if (unref(form).errors.password) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(unref(form).errors.password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-6"><button type="submit" class="border border-emerald-300 px-2 rounded-md bg-emerald-400 w-full hover:text-white hover:scale-105"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>Login</button></div></form><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "text-xs text-justify mt-3" }, _attrs))}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo! Ex voluptatem iusto in, perspiciatis laboriosam doloribus unde fuga voluptatum harum, dicta nemo esse tempore, quos quo soluta quaerat explicabo? Distinctio impedit voluptate voluptatem. Cum reiciendis odio rem perspiciatis aperiam. Velit voluptatem a magnam! Ducimus adipisci nam sint totam, itaque esse similique suscipit, dolorem deserunt sequi saepe consequatur voluptatum sapiente commodi qui minima doloremque laudantium inventore aut vel neque eligendi! Architecto, quidem pariatur voluptatem, ipsam fugiat nobis odio necessitatibus repudiandae hic consequuntur veniam sint? Quia fugiat ipsum inventore error tempore labore vel cum consequatur, exercitationem, porro repellat minus, voluptatibus ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo! Ex voluptatem iusto in, perspiciatis laboriosam doloribus unde fuga voluptatum harum, dicta nemo esse tempore, quos quo soluta quaerat explicabo? Distinctio impedit voluptate voluptatem. Cum reiciendis odio rem perspiciatis aperiam. Velit voluptatem a magnam! Ducimus adipisci nam sint totam, itaque esse similique suscipit, dolorem deserunt sequi saepe consequatur voluptatum sapiente commodi qui minima doloremque laudantium inventore aut vel neque eligendi! Architecto, quidem pariatur voluptatem, ipsam fugiat nobis odio necessitatibus repudiandae hic consequuntur veniam sint? Quia fugiat ipsum inventore error tempore labore vel cum consequatur, exercitationem, porro repellat minus, voluptatibus ullam? </article>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Text.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Text = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "Contacts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Contacts" }, null, _parent));
      _push(`<div class="flex flex-col gap-2 mx-auto mt-2 px-4"><h1 class="text-4xl text-center mb-2">Contacts page</h1>`);
      _push(ssrRenderComponent(Text, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    users: Object,
    filters: Object,
    errors: Object
  },
  setup(__props) {
    const props = __props;
    const form = reactive({
      name: "",
      email: "",
      password: ""
    });
    ref(false);
    console.log(props.errors);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Create user</title>`);
          } else {
            return [
              createVNode("title", null, "Create user")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-4xl text-center">Create new user</h1><form class="max-w-lg mx-auto mt-8"><div class="mb-6"><label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="name">Name: </label><input type="text" placeholder="Il tuo nome..." name="name"${ssrRenderAttr("value", form.name)} required class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400 w-full placeholder:italic">`);
      if (__props.errors.name) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(__props.errors.name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-6"><label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="email">Email: </label><input type="email" placeholder="La tua email..." name="email"${ssrRenderAttr("value", form.email)} required class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400 w-full placeholder:italic">`);
      if (__props.errors.email) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(__props.errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-6"><label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="password">Password: </label><input type="password" placeholder="La tua password..." name="password"${ssrRenderAttr("value", form.password)} required class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400 w-full placeholder:italic">`);
      if (__props.errors.password) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(__props.errors.password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-6"><button type="submit" class="border border-emerald-300 px-2 rounded-md bg-emerald-400 w-full hover:text-white hover:scale-105">Crea utente</button></div></form><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Create.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    users: Object,
    filters: Object
  },
  setup(__props) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Edit user</title>`);
          } else {
            return [
              createVNode("title", null, "Edit user")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-4xl text-center">Edit user</h1><input type="text" placeholder=""${ssrRenderAttr("value", _ctx.user)} class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400"><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Edit.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: Object,
    filters: Object,
    can: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search);
    watch(search, (newVal, oldVal) => {
      router.get("/users", { search: newVal }, { preserveState: true, replace: true });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Liv - Security</title>`);
          } else {
            return [
              createVNode("title", null, "Liv - Security")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-4xl text-center">All users</h1><nav class="flex items-center justify-center gap-4">`);
      if (__props.can.createUser) {
        _push(ssrRenderComponent(unref(Link), {
          href: "/users/create",
          active: _ctx.$page.component === "Users/Create",
          class: "bg-emerald-400 w-fit min-w-28 px-2 py-1 rounded-lg hover:text-white text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Create user`);
            } else {
              return [
                createTextVNode(" Create user")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<input type="text" placeholder="Search..."${ssrRenderAttr("value", search.value)} class="w-full border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400"></nav>`);
      if (__props.users) {
        _push(`<ul><!--[-->`);
        ssrRenderList(__props.users.data, (user) => {
          _push(`<li>${ssrInterpolate(user.id)}. ${ssrInterpolate(user.name)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<p>Non ci sono utenti</p>`);
      }
      _push(`<div class="self-center"><!--[-->`);
      ssrRenderList(__props.users.links, (link) => {
        _push(`<!--[-->`);
        if (link.url) {
          _push(ssrRenderComponent(unref(Link), {
            href: link.url,
            class: ["px-1 hover:font-bold", { "font-bold text-violet-500": link.active }]
          }, null, _parent));
        } else {
          _push(`<span class="${ssrRenderClass([{ "font-bold text-violet-500": link.active }, "px-1"])}">${link.label}</span>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    nick: String,
    job: String,
    Liv: Array,
    others: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Liv - Homepage</title><meta name="description" content="Welcome page"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Liv - Homepage"),
              createVNode("meta", {
                name: "description",
                content: "Welcome page"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-4xl text-center">Welcome page</h1><p>Il tuo nome: <b>${ssrInterpolate(__props.nick)}</b></p><article><p>Cosa impareremo in questo corso:</p><ul class="list-decimal list-inside mb-4"><!--[-->`);
      ssrRenderList(__props.Liv, (tech) => {
        _push(`<li>${ssrInterpolate(tech)}</li>`);
      });
      _push(`<!--]--></ul><p>Usando anche le seguenti tecnologie:</p><ul class="list-disc list-inside"><!--[-->`);
      ssrRenderList(__props.others, (other) => {
        _push(`<li>${ssrInterpolate(other)}</li>`);
      });
      _push(`<!--]--></ul></article><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.vue": __vite_glob_0_0, "./Pages/AdminDashboard.vue": __vite_glob_0_1, "./Pages/Auth/Login.vue": __vite_glob_0_2, "./Pages/Contacts.vue": __vite_glob_0_3, "./Pages/Users/Create.vue": __vite_glob_0_4, "./Pages/Users/Edit.vue": __vite_glob_0_5, "./Pages/Users/Index.vue": __vite_glob_0_6, "./Pages/Welcome.vue": __vite_glob_0_7 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
