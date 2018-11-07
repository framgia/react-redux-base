import Document, { Head, Main, NextScript } from 'next/document'
import 'bootstrap/dist/css/bootstrap.min.css';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        let pageContext;
            const page = ctx.renderPage(Component => {
            const WrappedComponent = props => {
                pageContext = props.pageContext;
                return <Component {...props} />;
            };

            return WrappedComponent;
        });

        return {
            ...page,
            pageContext,
            styles: (
                <React.Fragment>
                    <style
                      id="jss-server-side"
                      dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
                    />
                    {flush() || null}
                </React.Fragment>
            ),
        };
    }

    render() {
        const { pageContext } = this.props;

        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
                    <link rel='stylesheet' href='./../static/css/nprogress.css' />
                    <link rel='stylesheet' href='./../static/css/App.css' />
                </Head>
                <body className="is-preload" id="is-body">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
