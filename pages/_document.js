import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <link rel='stylesheet' href='./../static/css/app.css' />
                    <link rel='stylesheet' href='./../static/css/home.css' />
                    <link rel='stylesheet' href='./../static/css/login.css' />
                    <link rel='stylesheet' href='./../static/css/nprogress.css' />
                    <link rel='stylesheet' href='./../static/css/calendar.css' />
                    <link rel='stylesheet' href='./../static/css/steps.css' />
                    <link rel='stylesheet' href='./../static/css/layouts.css' />
                </Head>
                <body className="is_preload" id="is_body">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}