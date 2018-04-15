import * as cuba from '@cuba-platform/rest';

const Cuba = {
    install(Vue, options) {
        let cubaApp = cuba.initializeApp(options);
        Vue.prototype.$cuba = new Vue({
            data: () => ({
                isAuth: false,
                instance: cubaApp,
            }),
            methods: {
                async login(login, password) {
                    const response = await this.instance.login(login, password);
                    const result = response.hasOwnProperty('access_token');
                    if(result) {
                        this.isAuth = true;
                    }
                    return result;
                }
            }
        });
    }
};

export default Cuba;