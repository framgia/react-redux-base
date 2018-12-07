import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import createStore from '../store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next'
import { setCookie, getCookie, removeCookie } from './../utils/cookie';
import config from './../config';
import Router from 'next/router';
import NProgress from 'nprogress';
import { fromJS } from 'immutable';
import { appWithTranslation, i18n } from '../i18n'

Router.events.on('routeChangeStart', (url) => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx })
        }

        if (i18n.language !== 'vn' && i18n.language !== 'en' && i18n.language !== 'jp') {
            i18n.language = 'en'
        }

        return { pageProps }
    }

    render () {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withRedux(createStore, {
    serializeState: state => state.toJS(),
    deserializeState: state => fromJS(state)
})(withReduxSaga({ async: true })(appWithTranslation(MyApp)))
