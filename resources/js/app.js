import "es6-promise/auto";
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import axios from "axios";
import Form from "./core/Form";
import VueGtag from "vue-gtag";
import VueCookies from "vue-cookies";

if (typeof Object.assign != "function") {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) {
            // .length of function is 2
            "use strict";
            if (target == null) {
                // TypeError if undefined or null
                throw new TypeError(
                    "Cannot convert undefined or null to object"
                );
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource != null) {
                    // Skip over if undefined or null
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (
                            Object.prototype.hasOwnProperty.call(
                                nextSource,
                                nextKey
                            )
                        ) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

window.Form = Form;

Vue.use(VueRouter);
Vue.use(VueCookies);
Vue.use(VueGtag, {
    config: { id: "UA-00000000" }
});

Vue.$cookies.config("2h");

const app = new Vue({
    el: "#app",

    router: new VueRouter(routes),

    created() {},

    data() {
        return {};
    },

    methods: {}
});

Vue.filter("capitalize", function(value) {
    if (!value) return "";
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("format", function(value) {
    return new Intl.NumberFormat().format(value);
});
