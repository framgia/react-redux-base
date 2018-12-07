import Router from 'next/router';
import { reRecLoginAuth, recLoginAuth } from '../modules/auth/actions';
import { getCookie } from './cookie';

export default function(ctx) {
    if (ctx && ctx.isServer) {
        if (ctx.req.headers.cookie) {
            const cookie = (ctx.req.headers.cookie.split(';').find(c => c.trim().startsWith('token=')));
            if (cookie) {
                const token = cookie.split('=')[1]
                ctx.store.dispatch(reRecLoginAuth(token));
            }

            return null;
        }
    } else if (ctx && ctx.store) {
        let tokenFromStore = ctx.store.getState().getIn(['auth', 'isAuthenticated']);
        let tokenFromCookie = '';
        if (tokenFromCookie != '') {
            tokenFromCookie = getCookie('token')
        }
        let token = tokenFromStore ? tokenFromStore : tokenFromCookie;
        if (!tokenFromStore) {
            ctx.store.dispatch(reRecLoginAuth(token));
        }
        if (token && (ctx.pathname === '/auth/login' || ctx.pathname === '/auth/register')) {
            setTimeout(function() {
                Router.push('/');
            }, 0);
        }
    }
}
