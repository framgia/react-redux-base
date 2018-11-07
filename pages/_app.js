import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import createStore from '../store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next'
import startI18n from '../lib/startI18n'
import { getTranslation } from '../lib/translationHelpers'
import { setCookie, getCookie, removeCookie } from './../utils/cookie';
import config from './../config';
import Router from 'next/router';
import NProgress from 'nprogress';
import { fromJS } from 'immutable';
import { MuiThemeProvider } from '@material-ui/core/styles';
import getPageContext from '../lib/getPageContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';

let lang = "ja";
Router.events.on('routeChangeStart', (url) => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {}
        let translations = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx })
                translations = await getTranslation(
                lang,
                ['common', 'product'],
                config.CLIENT_URL + '/static/locales/'
            )
        }

        return { pageProps, translations }
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    constructor (props) {
        super(props)
        this.i18n = startI18n(props.translations, lang)
        this.pageContext = getPageContext();
    }

    render (props) {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <I18nextProvider i18n={this.i18n}>
                    <JssProvider
                        registry={this.pageContext.sheetsRegistry}
                        generateClassName={this.pageContext.generateClassName}
                    >
                        <MuiThemeProvider
                            theme={this.pageContext.theme}
                            sheetsManager={this.pageContext.sheetsManager}
                        >
                            <CssBaseline />
                            <Provider store={store}>
                                <Component pageContext={this.pageContext} {...pageProps} />
                            </Provider>
                        </MuiThemeProvider>
                    </JssProvider>
                </I18nextProvider>
            </Container>
        )
    }
}

export default withRedux(createStore, {
    serializeState: state => state.toJS(),
    deserializeState: state => fromJS(state)
})(withReduxSaga({ async: true })(MyApp))
