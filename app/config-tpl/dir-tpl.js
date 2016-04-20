/**
 * Created by yinsp@hsyuntai.com on 2016/4/20.
 */

'use strict';
module.exports = {
    controllers: {
        module: {
            type: 'dir'
        },
        weixin: {
            useWxApi: {
                createWxQRcode: {
                    type: 'file',
                    ext: 'js'
                },
                createWxMenu: {
                    type: 'file',
                    ext: 'js'
                },
                getWxServerIP: {
                    type: 'file',
                    ext: 'js'
                },
                queryWxMenu: {
                    type: 'file',
                    ext: 'js'
                },
                queryWxMenuConfig: {
                    type: 'file',
                    ext: 'js'
                }
            },
            weixin: {
                type: 'file',
                ext: 'js'
            },
            hospital_name: {
                type: 'file',
                ext: 'md'
            }
        },
        alipay: {
            type: 'dir'
        }
    },
    partials: {
        type: 'dir'
    },
    public: {
        static: {
            css: {
                hospital: {
                    type: 'file',
                    ext: 'css'
                }
            },
            images: {
                type: 'dir'
            },
            js: {
                type: 'dir'
            }
        }
    },
    views: {
        alipay: {
            type: 'dir'
        },
        android: {
            type: 'dir'
        },
        cloud: {
            type: 'dir'
        },
        common: {
            type: 'dir'
        },
        ios: {
            type: 'dir'
        },
        web: {
            type: 'dir'
        },
        weixin: {
            type: 'dir'
        },
        readme: {
            type: 'file',
            ext: 'md'
        }
    },
    hospital_name: {
        type: 'file',
        ext: 'md'
    }
};