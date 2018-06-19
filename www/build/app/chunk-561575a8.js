/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as TypeKeys } from './chunk-c62281c0.js';

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const appUpdateCount = (change) => (dispatch, _getState) => __awaiter(undefined, void 0, void 0, function* () {
    return dispatch({
        type: TypeKeys.APP_UPDATE_COUNT,
        change: change
    });
});

export { appUpdateCount as a };
