import { i18n, withNamespaces } from '../i18n'
import React from 'react';
import ReactCountryFlag from "react-country-flag";

const LanguageSwitch = ({t}) => (
    <ul className="nav justify-content-end">
        <li className="nav-item">
            <button className="btn btn-sm btn-basic btn-block text-uppercase" onClick={() => i18n.changeLanguage('vn')}>
                <ReactCountryFlag code="vn" svg />
            </button>
        </li>
        <li className="nav-item">
            <button className="btn btn-sm btn-basic btn-block text-uppercase" onClick={() => i18n.changeLanguage('jp')}>
                <ReactCountryFlag code="jp" jpg />
            </button>
        </li>
        <li className="nav-item">
            <button className="btn btn-sm btn-basic btn-block text-uppercase" onClick={() => i18n.changeLanguage('en')}>
                <ReactCountryFlag code="us" svg />
            </button>
        </li>
    </ul>
)

export default withNamespaces('common')(LanguageSwitch)
