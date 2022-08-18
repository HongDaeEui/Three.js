import Vue from 'vue'

var mixinGlobal = {
    methods: {
        helloWorld() {
            return 'Hello, world!'
        },
    }
}

Vue.mixin(mixinGlobal)