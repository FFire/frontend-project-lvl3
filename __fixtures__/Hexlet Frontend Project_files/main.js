/* eslint-disable no-useless-escape */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-multi-assign */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-rest-params */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable block-scoped-var */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-void */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable new-cap */
/* eslint-disable no-return-assign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-shadow */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-expressions */
(() => {
  const e = {
    9669: (e, t, n) => {
      e.exports = n(1609);
    },
    5448: (e, t, n) => {
      const r = n(4867);
      const i = n(6026);
      const s = n(4372);
      const o = n(5327);
      const a = n(4097);
      const c = n(4109);
      const l = n(7985);
      const u = n(5061);
      const f = n(5655);
      const h = n(5263);
      e.exports = function (e) {
        return new Promise((t, n) => {
          let p;
          let d = e.data;
          const g = e.headers;
          const m = e.responseType;
          function v() {
            e.cancelToken && e.cancelToken.unsubscribe(p),
            e.signal && e.signal.removeEventListener('abort', p);
          }
          r.isFormData(d) && delete g['Content-Type'];
          let y = new XMLHttpRequest();
          if (e.auth) {
            const b = e.auth.username || '';
            const _ = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : '';
            g.Authorization = `Basic ${btoa(`${b}:${_}`)}`;
          }
          const w = a(e.baseURL, e.url);
          function x() {
            if (y) {
              const r = 'getAllResponseHeaders' in y
                ? c(y.getAllResponseHeaders())
                : null;
              const s = {
                data:
                  m && m !== 'text' && m !== 'json'
                    ? y.response
                    : y.responseText,
                status: y.status,
                statusText: y.statusText,
                headers: r,
                config: e,
                request: y,
              };
              i(
                (e) => {
                  t(e), v();
                },
                (e) => {
                  n(e), v();
                },
                s,
              ),
              (y = null);
            }
          }
          if (
            (y.open(
              e.method.toUpperCase(),
              o(w, e.params, e.paramsSerializer),
              true,
            ),
            (y.timeout = e.timeout),
            'onloadend' in y
              ? (y.onloadend = x)
              : (y.onreadystatechange = function () {
                y
                    && y.readyState === 4
                    && (y.status !== 0
                      || (y.responseURL
                        && y.responseURL.indexOf('file:') === 0))
                    && setTimeout(x);
              }),
            (y.onabort = function () {
              y && (n(u('Request aborted', e, 'ECONNABORTED', y)), (y = null));
            }),
            (y.onerror = function () {
              n(u('Network Error', e, null, y)), (y = null);
            }),
            (y.ontimeout = function () {
              let t = e.timeout
                ? `timeout of ${e.timeout}ms exceeded`
                : 'timeout exceeded';
              const r = e.transitional || f.transitional;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(
                u(
                  t,
                  e,
                  r.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
                  y,
                ),
              ),
              (y = null);
            }),
            r.isStandardBrowserEnv())
          ) {
            const O = (e.withCredentials || l(w)) && e.xsrfCookieName
              ? s.read(e.xsrfCookieName)
              : void 0;
            O && (g[e.xsrfHeaderName] = O);
          }
          'setRequestHeader' in y
            && r.forEach(g, (e, t) => {
              void 0 === d && t.toLowerCase() === 'content-type'
                ? delete g[t]
                : y.setRequestHeader(t, e);
            }),
          r.isUndefined(e.withCredentials)
              || (y.withCredentials = !!e.withCredentials),
          m && m !== 'json' && (y.responseType = e.responseType),
          typeof e.onDownloadProgress === 'function'
              && y.addEventListener('progress', e.onDownloadProgress),
          typeof e.onUploadProgress === 'function'
              && y.upload
              && y.upload.addEventListener('progress', e.onUploadProgress),
          (e.cancelToken || e.signal)
              && ((p = function (e) {
                y
                  && (n(!e || (e && e.type) ? new h('canceled') : e),
                  y.abort(),
                  (y = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(p),
              e.signal
                && (e.signal.aborted
                  ? p()
                  : e.signal.addEventListener('abort', p))),
          d || (d = null),
          y.send(d);
        });
      };
    },
    1609: (e, t, n) => {
      const r = n(4867);
      const i = n(1849);
      const s = n(321);
      const o = n(7185);
      const a = (function e(t) {
        const n = new s(t);
        const a = i(s.prototype.request, n);
        return (
          r.extend(a, s.prototype, n),
          r.extend(a, n),
          (a.create = function (n) {
            return e(o(t, n));
          }),
          a
        );
      }(n(5655)));
      (a.Axios = s),
      (a.Cancel = n(5263)),
      (a.CancelToken = n(4972)),
      (a.isCancel = n(6502)),
      (a.VERSION = n(7288).version),
      (a.all = function (e) {
        return Promise.all(e);
      }),
      (a.spread = n(8713)),
      (a.isAxiosError = n(6268)),
      (e.exports = a),
      (e.exports.default = a);
    },
    5263: (e) => {
      function t(e) {
        this.message = e;
      }
      (t.prototype.toString = function () {
        return `Cancel${this.message ? `: ${this.message}` : ''}`;
      }),
      (t.prototype.__CANCEL__ = true),
      (e.exports = t);
    },
    4972: (e, t, n) => {
      const r = n(5263);
      function i(e) {
        if (typeof e !== 'function') { throw new TypeError('executor must be a function.'); }
        let t;
        this.promise = new Promise((e) => {
          t = e;
        });
        const n = this;
        this.promise.then((e) => {
          if (n._listeners) {
            let t;
            const r = n._listeners.length;
            for (t = 0; t < r; t++) n._listeners[t](e);
            n._listeners = null;
          }
        }),
        (this.promise.then = function (e) {
          let t;
          const r = new Promise((e) => {
            n.subscribe(e), (t = e);
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e((e) => {
          n.reason || ((n.reason = new r(e)), t(n.reason));
        });
      }
      (i.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
      (i.prototype.subscribe = function (e) {
        this.reason
          ? e(this.reason)
          : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
      }),
      (i.prototype.unsubscribe = function (e) {
        if (this._listeners) {
          const t = this._listeners.indexOf(e);
          t !== -1 && this._listeners.splice(t, 1);
        }
      }),
      (i.source = function () {
        let e;
        return {
          token: new i((t) => {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = i);
    },
    6502: (e) => {
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    321: (e, t, n) => {
      const r = n(4867);
      const i = n(5327);
      const s = n(782);
      const o = n(3572);
      const a = n(7185);
      const c = n(4875);
      const l = c.validators;
      function u(e) {
        (this.defaults = e),
        (this.interceptors = { request: new s(), response: new s() });
      }
      (u.prototype.request = function (e, t) {
        if (
          (typeof e === 'string' ? ((t = t || {}).url = e) : (t = e || {}),
          !t.url)
        ) { throw new Error('Provided config url is not valid'); }
        (t = a(this.defaults, t)).method
          ? (t.method = t.method.toLowerCase())
          : this.defaults.method
            ? (t.method = this.defaults.method.toLowerCase())
            : (t.method = 'get');
        const n = t.transitional;
        void 0 !== n
          && c.assertOptions(
            n,
            {
              silentJSONParsing: l.transitional(l.boolean),
              forcedJSONParsing: l.transitional(l.boolean),
              clarifyTimeoutError: l.transitional(l.boolean),
            },
            false,
          );
        const r = [];
        let i = true;
        this.interceptors.request.forEach((e) => {
          (typeof e.runWhen === 'function' && false === e.runWhen(t))
            || ((i = i && e.synchronous), r.unshift(e.fulfilled, e.rejected));
        });
        let s;
        const u = [];
        if (
          (this.interceptors.response.forEach((e) => {
            u.push(e.fulfilled, e.rejected);
          }),
          !i)
        ) {
          let f = [o, void 0];
          for (
            Array.prototype.unshift.apply(f, r),
            f = f.concat(u),
            s = Promise.resolve(t);
            f.length;

          ) { s = s.then(f.shift(), f.shift()); }
          return s;
        }
        for (var h = t; r.length;) {
          const p = r.shift();
          const d = r.shift();
          try {
            h = p(h);
          } catch (e) {
            d(e);
            break;
          }
        }
        try {
          s = o(h);
        } catch (e) {
          return Promise.reject(e);
        }
        for (; u.length;) s = s.then(u.shift(), u.shift());
        return s;
      }),
      (u.prototype.getUri = function (e) {
        if (!e.url) throw new Error('Provided config url is not valid');
        return (
          (e = a(this.defaults, e)),
          i(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
        );
      }),
      r.forEach(['delete', 'get', 'head', 'options'], (e) => {
        u.prototype[e] = function (t, n) {
          return this.request(
            a(n || {}, { method: e, url: t, data: (n || {}).data }),
          );
        };
      }),
      r.forEach(['post', 'put', 'patch'], (e) => {
        u.prototype[e] = function (t, n, r) {
          return this.request(a(r || {}, { method: e, url: t, data: n }));
        };
      }),
      (e.exports = u);
    },
    782: (e, t, n) => {
      const r = n(4867);
      function i() {
        this.handlers = [];
      }
      (i.prototype.use = function (e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
      (i.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (i.prototype.forEach = function (e) {
        r.forEach(this.handlers, (t) => {
          t !== null && e(t);
        });
      }),
      (e.exports = i);
    },
    4097: (e, t, n) => {
      const r = n(1793);
      const i = n(7303);
      e.exports = function (e, t) {
        return e && !r(t) ? i(e, t) : t;
      };
    },
    5061: (e, t, n) => {
      const r = n(481);
      e.exports = function (e, t, n, i, s) {
        const o = new Error(e);
        return r(o, t, n, i, s);
      };
    },
    3572: (e, t, n) => {
      const r = n(4867);
      const i = n(8527);
      const s = n(6502);
      const o = n(5655);
      const a = n(5263);
      function c(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        ) { throw new a('canceled'); }
      }
      e.exports = function (e) {
        return (
          c(e),
          (e.headers = e.headers || {}),
          (e.data = i.call(e, e.data, e.headers, e.transformRequest)),
          (e.headers = r.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers,
          )),
          r.forEach(
            ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
            (t) => {
              delete e.headers[t];
            },
          ),
          (e.adapter || o.adapter)(e).then(
            (t) => (
              c(e),
              (t.data = i.call(e, t.data, t.headers, e.transformResponse)),
              t
            ),
            (t) => (
              s(t)
                || (c(e),
                t
                  && t.response
                  && (t.response.data = i.call(
                    e,
                    t.response.data,
                    t.response.headers,
                    e.transformResponse,
                  ))),
              Promise.reject(t)
            ),
          )
        );
      };
    },
    481: (e) => {
      e.exports = function (e, t, n, r, i) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = r),
          (e.response = i),
          (e.isAxiosError = true),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          }),
          e
        );
      };
    },
    7185: (e, t, n) => {
      const r = n(4867);
      e.exports = function (e, t) {
        t = t || {};
        const n = {};
        function i(e, t) {
          return r.isPlainObject(e) && r.isPlainObject(t)
            ? r.merge(e, t)
            : r.isPlainObject(t)
              ? r.merge({}, t)
              : r.isArray(t)
                ? t.slice()
                : t;
        }
        function s(n) {
          return r.isUndefined(t[n])
            ? r.isUndefined(e[n])
              ? void 0
              : i(void 0, e[n])
            : i(e[n], t[n]);
        }
        function o(e) {
          if (!r.isUndefined(t[e])) return i(void 0, t[e]);
        }
        function a(n) {
          return r.isUndefined(t[n])
            ? r.isUndefined(e[n])
              ? void 0
              : i(void 0, e[n])
            : i(void 0, t[n]);
        }
        function c(n) {
          return n in t ? i(e[n], t[n]) : n in e ? i(void 0, e[n]) : void 0;
        }
        const l = {
          url: o,
          method: o,
          data: o,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: c,
        };
        return (
          r.forEach(Object.keys(e).concat(Object.keys(t)), (e) => {
            const t = l[e] || s;
            const i = t(e);
            (r.isUndefined(i) && t !== c) || (n[e] = i);
          }),
          n
        );
      };
    },
    6026: (e, t, n) => {
      const r = n(5061);
      e.exports = function (e, t, n) {
        const i = n.config.validateStatus;
        n.status && i && !i(n.status)
          ? t(
            r(
              `Request failed with status code ${n.status}`,
              n.config,
              null,
              n.request,
              n,
            ),
          )
          : e(n);
      };
    },
    8527: (e, t, n) => {
      const r = n(4867);
      const i = n(5655);
      e.exports = function (e, t, n) {
        const s = this || i;
        return (
          r.forEach(n, (n) => {
            e = n.call(s, e, t);
          }),
          e
        );
      };
    },
    5655: (e, t, n) => {
      const r = n(4867);
      const i = n(6016);
      const s = n(481);
      const o = { 'Content-Type': 'application/x-www-form-urlencoded' };
      function a(e, t) {
        !r.isUndefined(e)
          && r.isUndefined(e['Content-Type'])
          && (e['Content-Type'] = t);
      }
      let c;
      var l = {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false,
        },
        adapter:
          ((typeof XMLHttpRequest !== 'undefined'
            || (typeof process !== 'undefined'
              && Object.prototype.toString.call(process)
                === '[object process]'))
            && (c = n(5448)),
          c),
        transformRequest: [
          function (e, t) {
            return (
              i(t, 'Accept'),
              i(t, 'Content-Type'),
              r.isFormData(e)
              || r.isArrayBuffer(e)
              || r.isBuffer(e)
              || r.isStream(e)
              || r.isFile(e)
              || r.isBlob(e)
                ? e
                : r.isArrayBufferView(e)
                  ? e.buffer
                  : r.isURLSearchParams(e)
                    ? (a(t, 'application/x-www-form-urlencoded;charset=utf-8'),
                    e.toString())
                    : r.isObject(e)
                  || (t && t['Content-Type'] === 'application/json')
                      ? (a(t, 'application/json'),
                      // eslint-disable-next-line no-unused-vars
                      (function (e, t, n) {
                        if (r.isString(e)) {
                          try {
                            return (0, JSON.parse)(e), r.trim(e);
                          } catch (e) {
                            if (e.name !== 'SyntaxError') throw e;
                          }
                        }
                        return (0, JSON.stringify)(e);
                      }(e)))
                      : e
            );
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || l.transitional;
            const n = t && t.silentJSONParsing;
            const i = t && t.forcedJSONParsing;
            const o = !n && this.responseType === 'json';
            if (o || (i && r.isString(e) && e.length)) {
              try {
                return JSON.parse(e);
              } catch (e) {
                if (o) {
                  if (e.name === 'SyntaxError') throw s(e, this, 'E_JSON_PARSE');
                  throw e;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus(e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: 'application/json, text/plain, */*' } },
      };
      r.forEach(['delete', 'get', 'head'], (e) => {
        l.headers[e] = {};
      }),
      r.forEach(['post', 'put', 'patch'], (e) => {
        l.headers[e] = r.merge(o);
      }),
      (e.exports = l);
    },
    7288: (e) => {
      e.exports = { version: '0.25.0' };
    },
    1849: (e) => {
      e.exports = function (e, t) {
        return function () {
          for (var n = new Array(arguments.length), r = 0; r < n.length; r++) { n[r] = arguments[r]; }
          return e.apply(t, n);
        };
      };
    },
    5327: (e, t, n) => {
      const r = n(4867);
      function i(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      e.exports = function (e, t, n) {
        if (!t) return e;
        let s;
        if (n) s = n(t);
        else if (r.isURLSearchParams(t)) s = t.toString();
        else {
          const o = [];
          r.forEach(t, (e, t) => {
            e != null
              && (r.isArray(e) ? (t += '[]') : (e = [e]),
              r.forEach(e, (e) => {
                r.isDate(e)
                  ? (e = e.toISOString())
                  : r.isObject(e) && (e = JSON.stringify(e)),
                o.push(`${i(t)}=${i(e)}`);
              }));
          }),
          (s = o.join('&'));
        }
        if (s) {
          const a = e.indexOf('#');
          a !== -1 && (e = e.slice(0, a)),
          (e += (e.indexOf('?') === -1 ? '?' : '&') + s);
        }
        return e;
      };
    },
    7303: (e) => {
      e.exports = function (e, t) {
        return t ? `${e.replace(/\/+$/, '')}/${t.replace(/^\/+/, '')}` : e;
      };
    },
    4372: (e, t, n) => {
      const r = n(4867);
      e.exports = r.isStandardBrowserEnv()
        ? {
          write(e, t, n, i, s, o) {
            const a = [];
            a.push(`${e}=${encodeURIComponent(t)}`),
            r.isNumber(n) && a.push(`expires=${new Date(n).toGMTString()}`),
            r.isString(i) && a.push(`path=${i}`),
            r.isString(s) && a.push(`domain=${s}`),
            true === o && a.push('secure'),
            (document.cookie = a.join('; '));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp(`(^|;\\s*)(${e})=([^;]*)`),
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, '', Date.now() - 864e5);
          },
        }
        : {
          write() {},
          read() {
            return null;
          },
          remove() {},
        };
    },
    1793: (e) => {
      e.exports = function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
      };
    },
    6268: (e, t, n) => {
      const r = n(4867);
      e.exports = function (e) {
        return r.isObject(e) && true === e.isAxiosError;
      };
    },
    7985: (e, t, n) => {
      const r = n(4867);
      e.exports = r.isStandardBrowserEnv()
        ? (function () {
          let e;
          const t = /(msie|trident)/i.test(navigator.userAgent);
          const n = document.createElement('a');
          function i(e) {
            let r = e;
            return (
              t && (n.setAttribute('href', r), (r = n.href)),
              n.setAttribute('href', r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, '') : '',
                hash: n.hash ? n.hash.replace(/^#/, '') : '',
                hostname: n.hostname,
                port: n.port,
                pathname:
                    n.pathname.charAt(0) === '/'
                      ? n.pathname
                      : `/${n.pathname}`,
              }
            );
          }
          return (
            (e = i(window.location.href)),
            function (t) {
              const n = r.isString(t) ? i(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        }())
        : function () {
          return true;
        };
    },
    6016: (e, t, n) => {
      const r = n(4867);
      e.exports = function (e, t) {
        r.forEach(e, (n, r) => {
          r !== t
            && r.toUpperCase() === t.toUpperCase()
            && ((e[t] = n), delete e[r]);
        });
      };
    },
    4109: (e, t, n) => {
      const r = n(4867);
      const i = [
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
      ];
      e.exports = function (e) {
        let t;
        let n;
        let s;
        const o = {};
        return e
          ? (r.forEach(e.split('\n'), (e) => {
            if (
              ((s = e.indexOf(':')),
              (t = r.trim(e.substr(0, s)).toLowerCase()),
              (n = r.trim(e.substr(s + 1))),
              t)
            ) {
              if (o[t] && i.indexOf(t) >= 0) return;
              o[t] = t === 'set-cookie'
                ? (o[t] ? o[t] : []).concat([n])
                : o[t]
                  ? `${o[t]}, ${n}`
                  : n;
            }
          }),
          o)
          : o;
      };
    },
    8713: (e) => {
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    4875: (e, t, n) => {
      const r = n(7288).version;
      const i = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
        (e, t) => {
          i[e] = function (n) {
            return typeof n === e || `a${t < 1 ? 'n ' : ' '}${e}`;
          };
        },
      );
      const s = {};
      (i.transitional = function (e, t, n) {
        function i(e, t) {
          return `[Axios v${r}] Transitional option '${e}'${t}${
            n ? `. ${n}` : ''
          }`;
        }
        return function (n, r, o) {
          if (false === e) { throw new Error(i(r, ` has been removed${t ? ` in ${t}` : ''}`)); }
          return (
            t
              && !s[r]
              && ((s[r] = true),
              console.warn(
                i(
                  r,
                  ` has been deprecated since v${t} and will be removed in the near future`,
                ),
              )),
            !e || e(n, r, o)
          );
        };
      }),
      (e.exports = {
        assertOptions(e, t, n) {
          if (typeof e !== 'object') { throw new TypeError('options must be an object'); }
          for (let r = Object.keys(e), i = r.length; i-- > 0;) {
            const s = r[i];
            const o = t[s];
            if (o) {
              const a = e[s];
              const c = void 0 === a || o(a, s, e);
              if (true !== c) throw new TypeError(`option ${s} must be ${c}`);
            } else if (true !== n) throw Error(`Unknown option ${s}`);
          }
        },
        validators: i,
      });
    },
    4867: (e, t, n) => {
      const r = n(1849);
      const i = Object.prototype.toString;
      function s(e) {
        return Array.isArray(e);
      }
      function o(e) {
        return void 0 === e;
      }
      function a(e) {
        return i.call(e) === '[object ArrayBuffer]';
      }
      function c(e) {
        return e !== null && typeof e === 'object';
      }
      function l(e) {
        if (i.call(e) !== '[object Object]') return false;
        const t = Object.getPrototypeOf(e);
        return t === null || t === Object.prototype;
      }
      function u(e) {
        return i.call(e) === '[object Function]';
      }
      function f(e, t) {
        if (e != null) {
          if ((typeof e !== 'object' && (e = [e]), s(e))) for (let n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            for (const i in e) {
              Object.prototype.hasOwnProperty.call(e, i)
                && t.call(null, e[i], i, e);
            }
          }
        }
      }
      e.exports = {
        isArray: s,
        isArrayBuffer: a,
        isBuffer(e) {
          return (
            e !== null
            && !o(e)
            && e.constructor !== null
            && !o(e.constructor)
            && typeof e.constructor.isBuffer === 'function'
            && e.constructor.isBuffer(e)
          );
        },
        isFormData(e) {
          return i.call(e) === '[object FormData]';
        },
        isArrayBufferView(e) {
          return typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && a(e.buffer);
        },
        isString(e) {
          return typeof e === 'string';
        },
        isNumber(e) {
          return typeof e === 'number';
        },
        isObject: c,
        isPlainObject: l,
        isUndefined: o,
        isDate(e) {
          return i.call(e) === '[object Date]';
        },
        isFile(e) {
          return i.call(e) === '[object File]';
        },
        isBlob(e) {
          return i.call(e) === '[object Blob]';
        },
        isFunction: u,
        isStream(e) {
          return c(e) && u(e.pipe);
        },
        isURLSearchParams(e) {
          return i.call(e) === '[object URLSearchParams]';
        },
        isStandardBrowserEnv() {
          return (
            (typeof navigator === 'undefined'
              || (navigator.product !== 'ReactNative'
                && navigator.product !== 'NativeScript'
                && navigator.product !== 'NS'))
            && typeof window !== 'undefined'
            && typeof document !== 'undefined'
          );
        },
        forEach: f,
        merge: function e() {
          const t = {};
          function n(n, r) {
            l(t[r]) && l(n)
              ? (t[r] = e(t[r], n))
              : l(n)
                ? (t[r] = e({}, n))
                : s(n)
                  ? (t[r] = n.slice())
                  : (t[r] = n);
          }
          for (let r = 0, i = arguments.length; r < i; r++) f(arguments[r], n);
          return t;
        },
        extend(e, t, n) {
          return (
            f(t, (t, i) => {
              e[i] = n && typeof t === 'function' ? r(t, n) : t;
            }),
            e
          );
        },
        trim(e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
        },
        stripBOM(e) {
          return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
        },
      };
    },
    8552: (e, t, n) => {
      const r = n(852)(n(5639), 'DataView');
      e.exports = r;
    },
    1989: (e, t, n) => {
      const r = n(1789);
      const i = n(401);
      const s = n(7667);
      const o = n(1327);
      const a = n(1866);
      function c(e) {
        let t = -1;
        const n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          const r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = s),
      (c.prototype.has = o),
      (c.prototype.set = a),
      (e.exports = c);
    },
    8407: (e, t, n) => {
      const r = n(7040);
      const i = n(4125);
      const s = n(2117);
      const o = n(7518);
      const a = n(4705);
      function c(e) {
        let t = -1;
        const n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          const r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = s),
      (c.prototype.has = o),
      (c.prototype.set = a),
      (e.exports = c);
    },
    7071: (e, t, n) => {
      const r = n(852)(n(5639), 'Map');
      e.exports = r;
    },
    3369: (e, t, n) => {
      const r = n(4785);
      const i = n(1285);
      const s = n(6e3);
      const o = n(9916);
      const a = n(5265);
      function c(e) {
        let t = -1;
        const n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          const r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = s),
      (c.prototype.has = o),
      (c.prototype.set = a),
      (e.exports = c);
    },
    3818: (e, t, n) => {
      const r = n(852)(n(5639), 'Promise');
      e.exports = r;
    },
    8525: (e, t, n) => {
      const r = n(852)(n(5639), 'Set');
      e.exports = r;
    },
    8668: (e, t, n) => {
      const r = n(3369);
      const i = n(619);
      const s = n(2385);
      function o(e) {
        let t = -1;
        const n = e == null ? 0 : e.length;
        for (this.__data__ = new r(); ++t < n;) this.add(e[t]);
      }
      (o.prototype.add = o.prototype.push = i),
      (o.prototype.has = s),
      (e.exports = o);
    },
    6384: (e, t, n) => {
      const r = n(8407);
      const i = n(7465);
      const s = n(3779);
      const o = n(7599);
      const a = n(4758);
      const c = n(4309);
      function l(e) {
        const t = (this.__data__ = new r(e));
        this.size = t.size;
      }
      (l.prototype.clear = i),
      (l.prototype.delete = s),
      (l.prototype.get = o),
      (l.prototype.has = a),
      (l.prototype.set = c),
      (e.exports = l);
    },
    2705: (e, t, n) => {
      const r = n(5639).Symbol;
      e.exports = r;
    },
    1149: (e, t, n) => {
      const r = n(5639).Uint8Array;
      e.exports = r;
    },
    577: (e, t, n) => {
      const r = n(852)(n(5639), 'WeakMap');
      e.exports = r;
    },
    6874: (e) => {
      e.exports = function (e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      };
    },
    4963: (e) => {
      e.exports = function (e, t) {
        for (
          var n = -1, r = e == null ? 0 : e.length, i = 0, s = [];
          ++n < r;

        ) {
          const o = e[n];
          t(o, n, e) && (s[i++] = o);
        }
        return s;
      };
    },
    7443: (e, t, n) => {
      const r = n(2118);
      e.exports = function (e, t) {
        return !(e == null || !e.length) && r(e, t, 0) > -1;
      };
    },
    1196: (e) => {
      e.exports = function (e, t, n) {
        for (let r = -1, i = e == null ? 0 : e.length; ++r < i;) { if (n(t, e[r])) return true; }
        return false;
      };
    },
    4636: (e, t, n) => {
      const r = n(2545);
      const i = n(5694);
      const s = n(1469);
      const o = n(4144);
      const a = n(5776);
      const c = n(6719);
      const l = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        const n = s(e);
        const u = !n && i(e);
        const f = !n && !u && o(e);
        const h = !n && !u && !f && c(e);
        const p = n || u || f || h;
        const d = p ? r(e.length, String) : [];
        const g = d.length;
        for (const m in e) {
          (!t && !l.call(e, m))
            || (p
              && (m == 'length'
                || (f && (m == 'offset' || m == 'parent'))
                || (h
                  && (m == 'buffer' || m == 'byteLength' || m == 'byteOffset'))
                || a(m, g)))
            || d.push(m);
        }
        return d;
      };
    },
    9932: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) { i[n] = t(e[n], n, e); }
        return i;
      };
    },
    2488: (e) => {
      e.exports = function (e, t) {
        for (let n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
        return e;
      };
    },
    2663: (e) => {
      e.exports = function (e, t, n, r) {
        let i = -1;
        const s = e == null ? 0 : e.length;
        for (r && s && (n = e[++i]); ++i < s;) n = t(n, e[i], i, e);
        return n;
      };
    },
    2908: (e) => {
      e.exports = function (e, t) {
        for (let n = -1, r = e == null ? 0 : e.length; ++n < r;) { if (t(e[n], n, e)) return true; }
        return false;
      };
    },
    4286: (e) => {
      e.exports = function (e) {
        return e.split('');
      };
    },
    9029: (e) => {
      const t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      e.exports = function (e) {
        return e.match(t) || [];
      };
    },
    8470: (e, t, n) => {
      const r = n(7813);
      e.exports = function (e, t) {
        for (let n = e.length; n--;) if (r(e[n][0], t)) return n;
        return -1;
      };
    },
    9465: (e, t, n) => {
      const r = n(8777);
      e.exports = function (e, t, n) {
        t == '__proto__' && r
          ? r(e, t, {
            configurable: true,
            enumerable: true,
            value: n,
            writable: true,
          })
          : (e[t] = n);
      };
    },
    731: (e, t, n) => {
      const r = n(8668);
      const i = n(7443);
      const s = n(1196);
      const o = n(9932);
      const a = n(1717);
      const c = n(4757);
      e.exports = function (e, t, n, l) {
        let u = -1;
        let f = i;
        let h = true;
        const p = e.length;
        const d = [];
        const g = t.length;
        if (!p) return d;
        n && (t = o(t, a(n))),
        l
          ? ((f = s), (h = false))
          : t.length >= 200 && ((f = c), (h = false), (t = new r(t)));
        e: for (; ++u < p;) {
          let m = e[u];
          const v = n == null ? m : n(m);
          if (((m = l || m !== 0 ? m : 0), h && v == v)) {
            for (let y = g; y--;) if (t[y] === v) continue e;
            d.push(m);
          } else f(t, v, l) || d.push(m);
        }
        return d;
      };
    },
    1848: (e) => {
      e.exports = function (e, t, n, r) {
        for (let i = e.length, s = n + (r ? 1 : -1); r ? s-- : ++s < i;) { if (t(e[s], s, e)) return s; }
        return -1;
      };
    },
    1078: (e, t, n) => {
      const r = n(2488);
      const i = n(7285);
      e.exports = function e(t, n, s, o, a) {
        let c = -1;
        const l = t.length;
        for (s || (s = i), a || (a = []); ++c < l;) {
          const u = t[c];
          n > 0 && s(u)
            ? n > 1
              ? e(u, n - 1, s, o, a)
              : r(a, u)
            : o || (a[a.length] = u);
        }
        return a;
      };
    },
    8483: (e, t, n) => {
      const r = n(5063)();
      e.exports = r;
    },
    7816: (e, t, n) => {
      const r = n(8483);
      const i = n(3674);
      e.exports = function (e, t) {
        return e && r(e, t, i);
      };
    },
    7786: (e, t, n) => {
      const r = n(1811);
      const i = n(327);
      e.exports = function (e, t) {
        for (var n = 0, s = (t = r(t, e)).length; e != null && n < s;) { e = e[i(t[n++])]; }
        return n && n == s ? e : void 0;
      };
    },
    8866: (e, t, n) => {
      const r = n(2488);
      const i = n(1469);
      e.exports = function (e, t, n) {
        const s = t(e);
        return i(e) ? s : r(s, n(e));
      };
    },
    4239: (e, t, n) => {
      const r = n(2705);
      const i = n(9607);
      const s = n(2333);
      const o = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return e == null
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : o && o in Object(e)
            ? i(e)
            : s(e);
      };
    },
    8565: (e) => {
      const t = Object.prototype.hasOwnProperty;
      e.exports = function (e, n) {
        return e != null && t.call(e, n);
      };
    },
    13: (e) => {
      e.exports = function (e, t) {
        return e != null && t in Object(e);
      };
    },
    2118: (e, t, n) => {
      const r = n(1848);
      const i = n(2722);
      const s = n(2351);
      e.exports = function (e, t, n) {
        return t == t ? s(e, t, n) : r(e, i, n);
      };
    },
    9454: (e, t, n) => {
      const r = n(4239);
      const i = n(7005);
      e.exports = function (e) {
        return i(e) && r(e) == '[object Arguments]';
      };
    },
    939: (e, t, n) => {
      const r = n(2492);
      const i = n(7005);
      e.exports = function e(t, n, s, o, a) {
        return (
          t === n
          || (t == null || n == null || (!i(t) && !i(n))
            ? t != t && n != n
            : r(t, n, s, o, e, a))
        );
      };
    },
    2492: (e, t, n) => {
      const r = n(6384);
      const i = n(7114);
      const s = n(8351);
      const o = n(6096);
      const a = n(4160);
      const c = n(1469);
      const l = n(4144);
      const u = n(6719);
      const f = '[object Arguments]';
      const h = '[object Array]';
      const p = '[object Object]';
      const d = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, g, m, v) {
        let y = c(e);
        const b = c(t);
        let _ = y ? h : a(e);
        let w = b ? h : a(t);
        let x = (_ = _ == f ? p : _) == p;
        const O = (w = w == f ? p : w) == p;
        const E = _ == w;
        if (E && l(e)) {
          if (!l(t)) return false;
          (y = true), (x = false);
        }
        if (E && !x) {
          return (
            v || (v = new r()),
            y || u(e) ? i(e, t, n, g, m, v) : s(e, t, _, n, g, m, v)
          );
        }
        if (!(1 & n)) {
          const k = x && d.call(e, '__wrapped__');
          const S = O && d.call(t, '__wrapped__');
          if (k || S) {
            const C = k ? e.value() : e;
            const j = S ? t.value() : t;
            return v || (v = new r()), m(C, j, n, g, v);
          }
        }
        return !!E && (v || (v = new r()), o(e, t, n, g, m, v));
      };
    },
    2958: (e, t, n) => {
      const r = n(6384);
      const i = n(939);
      e.exports = function (e, t, n, s) {
        let o = n.length;
        const a = o;
        const c = !s;
        if (e == null) return !a;
        for (e = Object(e); o--;) {
          var l = n[o];
          if (c && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return false;
        }
        for (; ++o < a;) {
          const u = (l = n[o])[0];
          const f = e[u];
          const h = l[1];
          if (c && l[2]) {
            if (void 0 === f && !(u in e)) return false;
          } else {
            const p = new r();
            if (s) var d = s(f, h, u, e, t, p);
            if (!(void 0 === d ? i(h, f, 3, s, p) : d)) return false;
          }
        }
        return true;
      };
    },
    2722: (e) => {
      e.exports = function (e) {
        return e != e;
      };
    },
    8458: (e, t, n) => {
      const r = n(3560);
      const i = n(5346);
      const s = n(3218);
      const o = n(346);
      const a = /^\[object .+?Constructor\]$/;
      const c = Function.prototype;
      const l = Object.prototype;
      const u = c.toString;
      const f = l.hasOwnProperty;
      const h = RegExp(
        `^${u
          .call(f)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          )}$`,
      );
      e.exports = function (e) {
        return !(!s(e) || i(e)) && (r(e) ? h : a).test(o(e));
      };
    },
    8749: (e, t, n) => {
      const r = n(4239);
      const i = n(1780);
      const s = n(7005);
      const o = {};
      (o['[object Float32Array]'] = o['[object Float64Array]'] = o['[object Int8Array]'] = o['[object Int16Array]'] = o['[object Int32Array]'] = o['[object Uint8Array]'] = o['[object Uint8ClampedArray]'] = o['[object Uint16Array]'] = o['[object Uint32Array]'] = true),
      (o['[object Arguments]'] = o['[object Array]'] = o['[object ArrayBuffer]'] = o['[object Boolean]'] = o['[object DataView]'] = o['[object Date]'] = o['[object Error]'] = o['[object Function]'] = o['[object Map]'] = o['[object Number]'] = o['[object Object]'] = o['[object RegExp]'] = o['[object Set]'] = o['[object String]'] = o['[object WeakMap]'] = false),
      (e.exports = function (e) {
        return s(e) && i(e.length) && !!o[r(e)];
      });
    },
    7206: (e, t, n) => {
      const r = n(1573);
      const i = n(6432);
      const s = n(6557);
      const o = n(1469);
      const a = n(9601);
      e.exports = function (e) {
        return typeof e === 'function'
          ? e
          : e == null
            ? s
            : typeof e === 'object'
              ? o(e)
                ? i(e[0], e[1])
                : r(e)
              : a(e);
      };
    },
    280: (e, t, n) => {
      const r = n(5726);
      const i = n(6916);
      const s = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return i(e);
        const t = [];
        for (const n in Object(e)) { s.call(e, n) && n != 'constructor' && t.push(n); }
        return t;
      };
    },
    1573: (e, t, n) => {
      const r = n(2958);
      const i = n(1499);
      const s = n(2634);
      e.exports = function (e) {
        const t = i(e);
        return t.length == 1 && t[0][2]
          ? s(t[0][0], t[0][1])
          : function (n) {
            return n === e || r(n, e, t);
          };
      };
    },
    6432: (e, t, n) => {
      const r = n(939);
      const i = n(7361);
      const s = n(9095);
      const o = n(5403);
      const a = n(9162);
      const c = n(2634);
      const l = n(327);
      e.exports = function (e, t) {
        return o(e) && a(t)
          ? c(l(e), t)
          : function (n) {
            const o = i(n, e);
            return void 0 === o && o === t ? s(n, e) : r(t, o, 3);
          };
      };
    },
    371: (e) => {
      e.exports = function (e) {
        return function (t) {
          return t == null ? void 0 : t[e];
        };
      };
    },
    9152: (e, t, n) => {
      const r = n(7786);
      e.exports = function (e) {
        return function (t) {
          return r(t, e);
        };
      };
    },
    8674: (e) => {
      e.exports = function (e) {
        return function (t) {
          return e == null ? void 0 : e[t];
        };
      };
    },
    5976: (e, t, n) => {
      const r = n(6557);
      const i = n(5357);
      const s = n(61);
      e.exports = function (e, t) {
        return s(i(e, t, r), `${e}`);
      };
    },
    6560: (e, t, n) => {
      const r = n(5703);
      const i = n(8777);
      const s = n(6557);
      const o = i
        ? function (e, t) {
          return i(e, 'toString', {
            configurable: true,
            enumerable: false,
            value: r(t),
            writable: true,
          });
        }
        : s;
      e.exports = o;
    },
    4259: (e) => {
      e.exports = function (e, t, n) {
        let r = -1;
        let i = e.length;
        t < 0 && (t = -t > i ? 0 : i + t),
        (n = n > i ? i : n) < 0 && (n += i),
        (i = t > n ? 0 : (n - t) >>> 0),
        (t >>>= 0);
        for (var s = Array(i); ++r < i;) s[r] = e[r + t];
        return s;
      };
    },
    2545: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r;
      };
    },
    531: (e, t, n) => {
      const r = n(2705);
      const i = n(9932);
      const s = n(1469);
      const o = n(3448);
      const a = r ? r.prototype : void 0;
      const c = a ? a.toString : void 0;
      e.exports = function e(t) {
        if (typeof t === 'string') return t;
        if (s(t)) return `${i(t, e)}`;
        if (o(t)) return c ? c.call(t) : '';
        const n = `${t}`;
        return n == '0' && 1 / t == -1 / 0 ? '-0' : n;
      };
    },
    1717: (e) => {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    4757: (e) => {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    1811: (e, t, n) => {
      const r = n(1469);
      const i = n(5403);
      const s = n(5514);
      const o = n(9833);
      e.exports = function (e, t) {
        return r(e) ? e : i(e, t) ? [e] : s(o(e));
      };
    },
    180: (e, t, n) => {
      const r = n(4259);
      e.exports = function (e, t, n) {
        const i = e.length;
        return (n = void 0 === n ? i : n), !t && n >= i ? e : r(e, t, n);
      };
    },
    4429: (e, t, n) => {
      const r = n(5639)['__core-js_shared__'];
      e.exports = r;
    },
    5063: (e) => {
      e.exports = function (e) {
        return function (t, n, r) {
          for (let i = -1, s = Object(t), o = r(t), a = o.length; a--;) {
            const c = o[e ? a : ++i];
            if (false === n(s[c], c, s)) break;
          }
          return t;
        };
      };
    },
    8805: (e, t, n) => {
      const r = n(180);
      const i = n(2689);
      const s = n(3140);
      const o = n(9833);
      e.exports = function (e) {
        return function (t) {
          t = o(t);
          const n = i(t) ? s(t) : void 0;
          const a = n ? n[0] : t.charAt(0);
          const c = n ? r(n, 1).join('') : t.slice(1);
          return a[e]() + c;
        };
      };
    },
    5393: (e, t, n) => {
      const r = n(2663);
      const i = n(3816);
      const s = n(8748);
      const o = RegExp("['’]", 'g');
      e.exports = function (e) {
        return function (t) {
          return r(s(i(t).replace(o, '')), e, '');
        };
      };
    },
    9389: (e, t, n) => {
      const r = n(8674)({
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      });
      e.exports = r;
    },
    8777: (e, t, n) => {
      const r = n(852);
      const i = (function () {
        try {
          const e = r(Object, 'defineProperty');
          return e({}, '', {}), e;
        } catch (e) {}
      }());
      e.exports = i;
    },
    7114: (e, t, n) => {
      const r = n(8668);
      const i = n(2908);
      const s = n(4757);
      e.exports = function (e, t, n, o, a, c) {
        const l = 1 & n;
        const u = e.length;
        const f = t.length;
        if (u != f && !(l && f > u)) return false;
        const h = c.get(e);
        const p = c.get(t);
        if (h && p) return h == t && p == e;
        let d = -1;
        let g = true;
        const m = 2 & n ? new r() : void 0;
        for (c.set(e, t), c.set(t, e); ++d < u;) {
          var v = e[d];
          const y = t[d];
          if (o) var b = l ? o(y, v, d, t, e, c) : o(v, y, d, e, t, c);
          if (void 0 !== b) {
            if (b) continue;
            g = false;
            break;
          }
          if (m) {
            if (
              !i(t, (e, t) => {
                if (!s(m, t) && (v === e || a(v, e, n, o, c))) return m.push(t);
              })
            ) {
              g = false;
              break;
            }
          } else if (v !== y && !a(v, y, n, o, c)) {
            g = false;
            break;
          }
        }
        return c.delete(e), c.delete(t), g;
      };
    },
    8351: (e, t, n) => {
      const r = n(2705);
      const i = n(1149);
      const s = n(7813);
      const o = n(7114);
      const a = n(8776);
      const c = n(1814);
      const l = r ? r.prototype : void 0;
      const u = l ? l.valueOf : void 0;
      e.exports = function (e, t, n, r, l, f, h) {
        switch (n) {
          case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) { return false; }
            (e = e.buffer), (t = t.buffer);
          case '[object ArrayBuffer]':
            return !(e.byteLength != t.byteLength || !f(new i(e), new i(t)));
          case '[object Boolean]':
          case '[object Date]':
          case '[object Number]':
            return s(+e, +t);
          case '[object Error]':
            return e.name == t.name && e.message == t.message;
          case '[object RegExp]':
          case '[object String]':
            return e == `${t}`;
          case '[object Map]':
            var p = a;
          case '[object Set]':
            var d = 1 & r;
            if ((p || (p = c), e.size != t.size && !d)) return false;
            var g = h.get(e);
            if (g) return g == t;
            (r |= 2), h.set(e, t);
            var m = o(p(e), p(t), r, l, f, h);
            return h.delete(e), m;
          case '[object Symbol]':
            if (u) return u.call(e) == u.call(t);
        }
        return false;
      };
    },
    6096: (e, t, n) => {
      const r = n(8234);
      const i = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, s, o, a) {
        const c = 1 & n;
        const l = r(e);
        const u = l.length;
        if (u != r(t).length && !c) return false;
        for (var f = u; f--;) {
          var h = l[f];
          if (!(c ? h in t : i.call(t, h))) return false;
        }
        const p = a.get(e);
        const d = a.get(t);
        if (p && d) return p == t && d == e;
        let g = true;
        a.set(e, t), a.set(t, e);
        for (var m = c; ++f < u;) {
          const v = e[(h = l[f])];
          const y = t[h];
          if (s) var b = c ? s(y, v, h, t, e, a) : s(v, y, h, e, t, a);
          if (!(void 0 === b ? v === y || o(v, y, n, s, a) : b)) {
            g = false;
            break;
          }
          m || (m = h == 'constructor');
        }
        if (g && !m) {
          const _ = e.constructor;
          const w = t.constructor;
          _ == w
            || !('constructor' in e)
            || !('constructor' in t)
            || (typeof _ === 'function'
              && _ instanceof _
              && typeof w === 'function'
              && w instanceof w)
            || (g = false);
        }
        return a.delete(e), a.delete(t), g;
      };
    },
    1957: (e, t, n) => {
      const r = typeof n.g === 'object' && n.g && n.g.Object === Object && n.g;
      e.exports = r;
    },
    8234: (e, t, n) => {
      const r = n(8866);
      const i = n(9551);
      const s = n(3674);
      e.exports = function (e) {
        return r(e, s, i);
      };
    },
    5050: (e, t, n) => {
      const r = n(7019);
      e.exports = function (e, t) {
        const n = e.__data__;
        return r(t) ? n[typeof t === 'string' ? 'string' : 'hash'] : n.map;
      };
    },
    1499: (e, t, n) => {
      const r = n(9162);
      const i = n(3674);
      e.exports = function (e) {
        for (var t = i(e), n = t.length; n--;) {
          const s = t[n];
          const o = e[s];
          t[n] = [s, o, r(o)];
        }
        return t;
      };
    },
    852: (e, t, n) => {
      const r = n(8458);
      const i = n(7801);
      e.exports = function (e, t) {
        const n = i(e, t);
        return r(n) ? n : void 0;
      };
    },
    9607: (e, t, n) => {
      const r = n(2705);
      const i = Object.prototype;
      const s = i.hasOwnProperty;
      const o = i.toString;
      const a = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        const t = s.call(e, a);
        const n = e[a];
        try {
          e[a] = void 0;
          var r = true;
        } catch (e) {}
        const i = o.call(e);
        return r && (t ? (e[a] = n) : delete e[a]), i;
      };
    },
    9551: (e, t, n) => {
      const r = n(4963);
      const i = n(479);
      const s = Object.prototype.propertyIsEnumerable;
      const o = Object.getOwnPropertySymbols;
      const a = o
        ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)), r(o(e), (t) => s.call(e, t)));
        }
        : i;
      e.exports = a;
    },
    4160: (e, t, n) => {
      const r = n(8552);
      const i = n(7071);
      const s = n(3818);
      const o = n(8525);
      const a = n(577);
      const c = n(4239);
      const l = n(346);
      const u = '[object Map]';
      const f = '[object Promise]';
      const h = '[object Set]';
      const p = '[object WeakMap]';
      const d = '[object DataView]';
      const g = l(r);
      const m = l(i);
      const v = l(s);
      const y = l(o);
      const b = l(a);
      let _ = c;
      ((r && _(new r(new ArrayBuffer(1))) != d)
        || (i && _(new i()) != u)
        || (s && _(s.resolve()) != f)
        || (o && _(new o()) != h)
        || (a && _(new a()) != p))
        && (_ = function (e) {
          const t = c(e);
          const n = t == '[object Object]' ? e.constructor : void 0;
          const r = n ? l(n) : '';
          if (r) {
            switch (r) {
              case g:
                return d;
              case m:
                return u;
              case v:
                return f;
              case y:
                return h;
              case b:
                return p;
            }
          }
          return t;
        }),
      (e.exports = _);
    },
    7801: (e) => {
      e.exports = function (e, t) {
        return e == null ? void 0 : e[t];
      };
    },
    222: (e, t, n) => {
      const r = n(1811);
      const i = n(5694);
      const s = n(1469);
      const o = n(5776);
      const a = n(1780);
      const c = n(327);
      e.exports = function (e, t, n) {
        for (var l = -1, u = (t = r(t, e)).length, f = false; ++l < u;) {
          var h = c(t[l]);
          if (!(f = e != null && n(e, h))) break;
          e = e[h];
        }
        return f || ++l != u
          ? f
          : !!(u = e == null ? 0 : e.length)
              && a(u)
              && o(h, u)
              && (s(e) || i(e));
      };
    },
    2689: (e) => {
      const t = RegExp(
        '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]',
      );
      e.exports = function (e) {
        return t.test(e);
      };
    },
    3157: (e) => {
      const t = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      e.exports = function (e) {
        return t.test(e);
      };
    },
    1789: (e, t, n) => {
      const r = n(4536);
      e.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    401: (e) => {
      e.exports = function (e) {
        const t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    7667: (e, t, n) => {
      const r = n(4536);
      const i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        const t = this.__data__;
        if (r) {
          const n = t[e];
          return n === '__lodash_hash_undefined__' ? void 0 : n;
        }
        return i.call(t, e) ? t[e] : void 0;
      };
    },
    1327: (e, t, n) => {
      const r = n(4536);
      const i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        const t = this.__data__;
        return r ? void 0 !== t[e] : i.call(t, e);
      };
    },
    1866: (e, t, n) => {
      const r = n(4536);
      e.exports = function (e, t) {
        const n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? '__lodash_hash_undefined__' : t),
          this
        );
      };
    },
    7285: (e, t, n) => {
      const r = n(2705);
      const i = n(5694);
      const s = n(1469);
      const o = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return s(e) || i(e) || !!(o && e && e[o]);
      };
    },
    5776: (e) => {
      const t = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, n) {
        const r = typeof e;
        return (
          !!(n = n == null ? 9007199254740991 : n)
          && (r == 'number' || (r != 'symbol' && t.test(e)))
          && e > -1
          && e % 1 == 0
          && e < n
        );
      };
    },
    5403: (e, t, n) => {
      const r = n(1469);
      const i = n(3448);
      const s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      const o = /^\w*$/;
      e.exports = function (e, t) {
        if (r(e)) return false;
        const n = typeof e;
        return (
          !(
            n != 'number'
            && n != 'symbol'
            && n != 'boolean'
            && e != null
            && !i(e)
          )
          || o.test(e)
          || !s.test(e)
          || (t != null && e in Object(t))
        );
      };
    },
    7019: (e) => {
      e.exports = function (e) {
        const t = typeof e;
        return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
          ? e !== '__proto__'
          : e === null;
      };
    },
    5346: (e, t, n) => {
      let r;
      const i = n(4429);
      const s = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ''))
        ? `Symbol(src)_1.${r}`
        : '';
      e.exports = function (e) {
        return !!s && s in e;
      };
    },
    5726: (e) => {
      const t = Object.prototype;
      e.exports = function (e) {
        const n = e && e.constructor;
        return e === ((typeof n === 'function' && n.prototype) || t);
      };
    },
    9162: (e, t, n) => {
      const r = n(3218);
      e.exports = function (e) {
        return e == e && !r(e);
      };
    },
    7040: (e) => {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    4125: (e, t, n) => {
      const r = n(8470);
      const i = Array.prototype.splice;
      e.exports = function (e) {
        const t = this.__data__;
        const n = r(t, e);
        return !(
          n < 0
          || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0)
        );
      };
    },
    2117: (e, t, n) => {
      const r = n(8470);
      e.exports = function (e) {
        const t = this.__data__;
        const n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    7518: (e, t, n) => {
      const r = n(8470);
      e.exports = function (e) {
        return r(this.__data__, e) > -1;
      };
    },
    4705: (e, t, n) => {
      const r = n(8470);
      e.exports = function (e, t) {
        const n = this.__data__;
        const i = r(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
      };
    },
    4785: (e, t, n) => {
      const r = n(1989);
      const i = n(8407);
      const s = n(7071);
      e.exports = function () {
        (this.size = 0),
        (this.__data__ = {
          hash: new r(),
          map: new (s || i)(),
          string: new r(),
        });
      };
    },
    1285: (e, t, n) => {
      const r = n(5050);
      e.exports = function (e) {
        const t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    6e3: (e, t, n) => {
      const r = n(5050);
      e.exports = function (e) {
        return r(this, e).get(e);
      };
    },
    9916: (e, t, n) => {
      const r = n(5050);
      e.exports = function (e) {
        return r(this, e).has(e);
      };
    },
    5265: (e, t, n) => {
      const r = n(5050);
      e.exports = function (e, t) {
        const n = r(this, e);
        const i = n.size;
        return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
      };
    },
    8776: (e) => {
      e.exports = function (e) {
        let t = -1;
        const n = Array(e.size);
        return (
          e.forEach((e, r) => {
            n[++t] = [r, e];
          }),
          n
        );
      };
    },
    2634: (e) => {
      e.exports = function (e, t) {
        return function (n) {
          return n != null && n[e] === t && (void 0 !== t || e in Object(n));
        };
      };
    },
    4523: (e, t, n) => {
      const r = n(8306);
      e.exports = function (e) {
        const t = r(e, (e) => (n.size === 500 && n.clear(), e));
        var n = t.cache;
        return t;
      };
    },
    4536: (e, t, n) => {
      const r = n(852)(Object, 'create');
      e.exports = r;
    },
    6916: (e, t, n) => {
      const r = n(5569)(Object.keys, Object);
      e.exports = r;
    },
    1167: (e, t, n) => {
      e = n.nmd(e);
      const r = n(1957);
      const i = t && !t.nodeType && t;
      const s = i && e && !e.nodeType && e;
      const o = s && s.exports === i && r.process;
      const a = (function () {
        try {
          return (
            (s && s.require && s.require('util').types)
            || (o && o.binding && o.binding('util'))
          );
        } catch (e) {}
      }());
      e.exports = a;
    },
    2333: (e) => {
      const t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    5569: (e) => {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
    },
    5357: (e, t, n) => {
      const r = n(6874);
      const i = Math.max;
      e.exports = function (e, t, n) {
        return (
          (t = i(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var s = arguments, o = -1, a = i(s.length - t, 0), c = Array(a);
              ++o < a;

            ) { c[o] = s[t + o]; }
            o = -1;
            for (var l = Array(t + 1); ++o < t;) l[o] = s[o];
            return (l[t] = n(c)), r(e, this, l);
          }
        );
      };
    },
    5639: (e, t, n) => {
      const r = n(1957);
      const i = typeof self === 'object' && self && self.Object === Object && self;
      const s = r || i || Function('return this')();
      e.exports = s;
    },
    619: (e) => {
      e.exports = function (e) {
        return this.__data__.set(e, '__lodash_hash_undefined__'), this;
      };
    },
    2385: (e) => {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    1814: (e) => {
      e.exports = function (e) {
        let t = -1;
        const n = Array(e.size);
        return (
          e.forEach((e) => {
            n[++t] = e;
          }),
          n
        );
      };
    },
    61: (e, t, n) => {
      const r = n(6560);
      const i = n(1275)(r);
      e.exports = i;
    },
    1275: (e) => {
      const t = Date.now;
      e.exports = function (e) {
        let n = 0;
        let r = 0;
        return function () {
          const i = t();
          const s = 16 - (i - r);
          if (((r = i), s > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return e.apply(void 0, arguments);
        };
      };
    },
    7465: (e, t, n) => {
      const r = n(8407);
      e.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    3779: (e) => {
      e.exports = function (e) {
        const t = this.__data__;
        const n = t.delete(e);
        return (this.size = t.size), n;
      };
    },
    7599: (e) => {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    4758: (e) => {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    4309: (e, t, n) => {
      const r = n(8407);
      const i = n(7071);
      const s = n(3369);
      e.exports = function (e, t) {
        let n = this.__data__;
        if (n instanceof r) {
          const o = n.__data__;
          if (!i || o.length < 199) { return o.push([e, t]), (this.size = ++n.size), this; }
          n = this.__data__ = new s(o);
        }
        return n.set(e, t), (this.size = n.size), this;
      };
    },
    2351: (e) => {
      e.exports = function (e, t, n) {
        for (let r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
        return -1;
      };
    },
    3140: (e, t, n) => {
      const r = n(4286);
      const i = n(2689);
      const s = n(676);
      e.exports = function (e) {
        return i(e) ? s(e) : r(e);
      };
    },
    5514: (e, t, n) => {
      const r = n(4523);
      const i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      const s = /\\(\\)?/g;
      const o = r((e) => {
        const t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(''),
          e.replace(i, (e, n, r, i) => {
            t.push(r ? i.replace(s, '$1') : n || e);
          }),
          t
        );
      });
      e.exports = o;
    },
    327: (e, t, n) => {
      const r = n(3448);
      e.exports = function (e) {
        if (typeof e === 'string' || r(e)) return e;
        const t = `${e}`;
        return t == '0' && 1 / e == -1 / 0 ? '-0' : t;
      };
    },
    346: (e) => {
      const t = Function.prototype.toString;
      e.exports = function (e) {
        if (e != null) {
          try {
            return t.call(e);
          } catch (e) {}
          try {
            return `${e}`;
          } catch (e) {}
        }
        return '';
      };
    },
    676: (e) => {
      const t = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]';
      const n = '\\ud83c[\\udffb-\\udfff]';
      const r = '[^\\ud800-\\udfff]';
      const i = '(?:\\ud83c[\\udde6-\\uddff]){2}';
      const s = '[\\ud800-\\udbff][\\udc00-\\udfff]';
      const o = `(?:${t}|${n})?`;
      const a = '[\\ufe0e\\ufe0f]?';
      const c = `${a + o}(?:\\u200d(?:${[r, i, s].join('|')})${a}${o})*`;
      const l = `(?:${[`${r + t}?`, t, i, s, '[\\ud800-\\udfff]'].join('|')})`;
      const u = RegExp(`${n}(?=${n})|${l}${c}`, 'g');
      e.exports = function (e) {
        return e.match(u) || [];
      };
    },
    2757: (e) => {
      const t = 'a-z\\xdf-\\xf6\\xf8-\\xff';
      const n = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
      const r = '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
      const i = `[${r}]`;
      const s = '\\d+';
      const o = `[${t}]`;
      const a = `[^\\ud800-\\udfff${r}${s}\\u2700-\\u27bf${t}${n}]`;
      const c = '(?:\\ud83c[\\udde6-\\uddff]){2}';
      const l = '[\\ud800-\\udbff][\\udc00-\\udfff]';
      const u = `[${n}]`;
      const f = `(?:${o}|${a})`;
      const h = `(?:${u}|${a})`;
      const p = "(?:['’](?:d|ll|m|re|s|t|ve))?";
      const d = "(?:['’](?:D|LL|M|RE|S|T|VE))?";
      const g = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?';
      const m = '[\\ufe0e\\ufe0f]?';
      const v = `${m + g}(?:\\u200d(?:${['[^\\ud800-\\udfff]', c, l].join(
        '|',
      )})${m}${g})*`;
      const y = `(?:${['[\\u2700-\\u27bf]', c, l].join('|')})${v}`;
      const b = RegExp(
        [
          `${u}?${o}+${p}(?=${[i, u, '$'].join('|')})`,
          `${h}+${d}(?=${[i, u + f, '$'].join('|')})`,
          `${u}?${f}+${p}`,
          `${u}+${d}`,
          '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
          '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
          s,
          y,
        ].join('|'),
        'g',
      );
      e.exports = function (e) {
        return e.match(b) || [];
      };
    },
    8929: (e, t, n) => {
      const r = n(8403);
      const i = n(5393)(
        (e, t, n) => ((t = t.toLowerCase()), e + (n ? r(t) : t)),
      );
      e.exports = i;
    },
    8403: (e, t, n) => {
      const r = n(9833);
      const i = n(1700);
      e.exports = function (e) {
        return i(r(e).toLowerCase());
      };
    },
    5703: (e) => {
      e.exports = function (e) {
        return function () {
          return e;
        };
      };
    },
    3816: (e, t, n) => {
      const r = n(9389);
      const i = n(9833);
      const s = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      const o = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
      e.exports = function (e) {
        return (e = i(e)) && e.replace(s, r).replace(o, '');
      };
    },
    9521: (e, t, n) => {
      const r = n(731);
      const i = n(1078);
      const s = n(5976);
      const o = n(9246);
      const a = n(928);
      const c = s((e, t) => {
        let n = a(t);
        return (
          o(n) && (n = void 0), o(e) ? r(e, i(t, 1, o, true), void 0, n) : []
        );
      });
      e.exports = c;
    },
    7813: (e) => {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    7361: (e, t, n) => {
      const r = n(7786);
      e.exports = function (e, t, n) {
        const i = e == null ? void 0 : r(e, t);
        return void 0 === i ? n : i;
      };
    },
    8721: (e, t, n) => {
      const r = n(8565);
      const i = n(222);
      e.exports = function (e, t) {
        return e != null && i(e, t, r);
      };
    },
    9095: (e, t, n) => {
      const r = n(13);
      const i = n(222);
      e.exports = function (e, t) {
        return e != null && i(e, t, r);
      };
    },
    6557: (e) => {
      e.exports = function (e) {
        return e;
      };
    },
    5694: (e, t, n) => {
      const r = n(9454);
      const i = n(7005);
      const s = Object.prototype;
      const o = s.hasOwnProperty;
      const a = s.propertyIsEnumerable;
      const c = r(
        (function () {
          return arguments;
        }()),
      )
        ? r
        : function (e) {
          return i(e) && o.call(e, 'callee') && !a.call(e, 'callee');
        };
      e.exports = c;
    },
    1469: (e) => {
      const t = Array.isArray;
      e.exports = t;
    },
    8612: (e, t, n) => {
      const r = n(3560);
      const i = n(1780);
      e.exports = function (e) {
        return e != null && i(e.length) && !r(e);
      };
    },
    9246: (e, t, n) => {
      const r = n(8612);
      const i = n(7005);
      e.exports = function (e) {
        return i(e) && r(e);
      };
    },
    4144: (e, t, n) => {
      e = n.nmd(e);
      const r = n(5639);
      const i = n(5062);
      const s = t && !t.nodeType && t;
      const o = s && e && !e.nodeType && e;
      const a = o && o.exports === s ? r.Buffer : void 0;
      const c = (a ? a.isBuffer : void 0) || i;
      e.exports = c;
    },
    3560: (e, t, n) => {
      const r = n(4239);
      const i = n(3218);
      e.exports = function (e) {
        if (!i(e)) return false;
        const t = r(e);
        return (
          t == '[object Function]'
          || t == '[object GeneratorFunction]'
          || t == '[object AsyncFunction]'
          || t == '[object Proxy]'
        );
      };
    },
    1780: (e) => {
      e.exports = function (e) {
        return (
          typeof e === 'number' && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    3218: (e) => {
      e.exports = function (e) {
        const t = typeof e;
        return e != null && (t == 'object' || t == 'function');
      };
    },
    7005: (e) => {
      e.exports = function (e) {
        return e != null && typeof e === 'object';
      };
    },
    3448: (e, t, n) => {
      const r = n(4239);
      const i = n(7005);
      e.exports = function (e) {
        return typeof e === 'symbol' || (i(e) && r(e) == '[object Symbol]');
      };
    },
    6719: (e, t, n) => {
      const r = n(8749);
      const i = n(1717);
      const s = n(1167);
      const o = s && s.isTypedArray;
      const a = o ? i(o) : r;
      e.exports = a;
    },
    3674: (e, t, n) => {
      const r = n(4636);
      const i = n(280);
      const s = n(8612);
      e.exports = function (e) {
        return s(e) ? r(e) : i(e);
      };
    },
    928: (e) => {
      e.exports = function (e) {
        const t = e == null ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
    },
    7523: (e, t, n) => {
      const r = n(9465);
      const i = n(7816);
      const s = n(7206);
      e.exports = function (e, t) {
        const n = {};
        return (
          (t = s(t, 3)),
          i(e, (e, i, s) => {
            r(n, t(e, i, s), e);
          }),
          n
        );
      };
    },
    6604: (e, t, n) => {
      const r = n(9465);
      const i = n(7816);
      const s = n(7206);
      e.exports = function (e, t) {
        const n = {};
        return (
          (t = s(t, 3)),
          i(e, (e, i, s) => {
            r(n, i, t(e, i, s));
          }),
          n
        );
      };
    },
    8306: (e, t, n) => {
      const r = n(3369);
      function i(e, t) {
        if (typeof e !== 'function' || (t != null && typeof t !== 'function')) { throw new TypeError('Expected a function'); }
        var n = function () {
          const r = arguments;
          const i = t ? t.apply(this, r) : r[0];
          const s = n.cache;
          if (s.has(i)) return s.get(i);
          const o = e.apply(this, r);
          return (n.cache = s.set(i, o) || s), o;
        };
        return (n.cache = new (i.Cache || r)()), n;
      }
      (i.Cache = r), (e.exports = i);
    },
    9601: (e, t, n) => {
      const r = n(371);
      const i = n(9152);
      const s = n(5403);
      const o = n(327);
      e.exports = function (e) {
        return s(e) ? r(o(e)) : i(e);
      };
    },
    1865: (e, t, n) => {
      const r = n(5393)((e, t, n) => e + (n ? '_' : '') + t.toLowerCase());
      e.exports = r;
    },
    479: (e) => {
      e.exports = function () {
        return [];
      };
    },
    5062: (e) => {
      e.exports = function () {
        return false;
      };
    },
    9833: (e, t, n) => {
      const r = n(531);
      e.exports = function (e) {
        return e == null ? '' : r(e);
      };
    },
    3955: (e, t, n) => {
      const r = n(9833);
      let i = 0;
      e.exports = function (e) {
        const t = ++i;
        return r(e) + t;
      };
    },
    1700: (e, t, n) => {
      const r = n(8805)('toUpperCase');
      e.exports = r;
    },
    8748: (e, t, n) => {
      const r = n(9029);
      const i = n(3157);
      const s = n(9833);
      const o = n(2757);
      e.exports = function (e, t, n) {
        return (
          (e = s(e)),
          void 0 === (t = n ? void 0 : t)
            ? i(e)
              ? o(e)
              : r(e)
            : e.match(t) || []
        );
      };
    },
    5760: (e) => {
      function t(e) {
        (this._maxSize = e), this.clear();
      }
      (t.prototype.clear = function () {
        (this._size = 0), (this._values = Object.create(null));
      }),
      (t.prototype.get = function (e) {
        return this._values[e];
      }),
      (t.prototype.set = function (e, t) {
        return (
          this._size >= this._maxSize && this.clear(),
          e in this._values || this._size++,
          (this._values[e] = t)
        );
      });
      const n = /[^.^\]^[]+|(?=\[\]|\.\.)/g;
      const r = /^\d+$/;
      const i = /^\d/;
      const s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
      const o = /^\s*(['"]?)(.*?)(\1)\s*$/;
      const a = new t(512);
      const c = new t(512);
      const l = new t(512);
      function u(e) {
        return (
          a.get(e)
          || a.set(
            e,
            f(e).map((e) => e.replace(o, '$2')),
          )
        );
      }
      function f(e) {
        return e.match(n);
      }
      function h(e) {
        return (
          typeof e === 'string' && e && ["'", '"'].indexOf(e.charAt(0)) !== -1
        );
      }
      function p(e) {
        return (
          !h(e)
          && ((function (e) {
            return e.match(i) && !e.match(r);
          }(e))
            || (function (e) {
              return s.test(e);
            }(e)))
        );
      }
      e.exports = {
        Cache: t,
        split: f,
        normalizePath: u,
        setter(e) {
          const t = u(e);
          return (
            c.get(e)
            || c.set(e, (e, n) => {
              for (var r = 0, i = t.length, s = e; r < i - 1;) {
                const o = t[r];
                if (
                  o === '__proto__'
                  || o === 'constructor'
                  || o === 'prototype'
                ) { return e; }
                s = s[t[r++]];
              }
              s[t[r]] = n;
            })
          );
        },
        getter(e, t) {
          const n = u(e);
          return (
            l.get(e)
            || l.set(e, (e) => {
              for (let r = 0, i = n.length; r < i;) {
                if (e == null && t) return;
                e = e[n[r++]];
              }
              return e;
            })
          );
        },
        join(e) {
          return e.reduce(
            (e, t) => e + (h(t) || r.test(t) ? `[${t}]` : (e ? '.' : '') + t),
            '',
          );
        },
        forEach(e, t, n) {
          !(function (e, t, n) {
            let r;
            let i;
            let s;
            let o;
            const a = e.length;
            for (i = 0; i < a; i++) {
              (r = e[i])
                && (p(r) && (r = `"${r}"`),
                (s = !(o = h(r)) && /^\d+$/.test(r)),
                t.call(n, r, o, s, i, e));
            }
          }(Array.isArray(e) ? e : f(e), t, n));
        },
      };
    },
    4633: (e) => {
      function t(e, t) {
        let n = e.length;
        const r = new Array(n);
        const i = {};
        let s = n;
        const o = (function (e) {
          for (var t = new Map(), n = 0, r = e.length; n < r; n++) {
            const i = e[n];
            t.has(i[0]) || t.set(i[0], new Set()),
            t.has(i[1]) || t.set(i[1], new Set()),
            t.get(i[0]).add(i[1]);
          }
          return t;
        }(t));
        const a = (function (e) {
          for (var t = new Map(), n = 0, r = e.length; n < r; n++) { t.set(e[n], n); }
          return t;
        }(e));
        for (
          t.forEach((e) => {
            if (!a.has(e[0]) || !a.has(e[1])) {
              throw new Error(
                'Unknown node. There is an unknown node in the supplied edges.',
              );
            }
          });
          s--;

        ) { i[s] || c(e[s], s, new Set()); }
        return r;
        function c(e, t, s) {
          if (s.has(e)) {
            let l;
            try {
              l = `, node was:${JSON.stringify(e)}`;
            } catch (e) {
              l = '';
            }
            throw new Error(`Cyclic dependency${l}`);
          }
          if (!a.has(e)) {
            throw new Error(
              `Found unknown node. Make sure to provided all involved nodes. Unknown node: ${JSON.stringify(
                e,
              )}`,
            );
          }
          if (!i[t]) {
            i[t] = true;
            let u = o.get(e) || new Set();
            if ((t = (u = Array.from(u)).length)) {
              s.add(e);
              do {
                const f = u[--t];
                c(f, a.get(f), s);
              } while (t);
              s.delete(e);
            }
            r[--n] = e;
          }
        }
      }
      (e.exports = function (e) {
        return t(
          (function (e) {
            for (var t = new Set(), n = 0, r = e.length; n < r; n++) {
              const i = e[n];
              t.add(i[0]), t.add(i[1]);
            }
            return Array.from(t);
          }(e)),
          e,
        );
      }),
      (e.exports.array = t);
    },
  };
  const t = {};
  function n(r) {
    const i = t[r];
    if (void 0 !== i) return i.exports;
    const s = (t[r] = { id: r, loaded: false, exports: {} });
    return e[r](s, s.exports, n), (s.loaded = true), s.exports;
  }
  (n.n = (e) => {
    const t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
  (n.d = (e, t) => {
    for (const r in t) {
      n.o(t, r)
          && !n.o(e, r)
          && Object.defineProperty(e, r, { enumerable: true, get: t[r] });
    }
  }),
  (n.g = (function () {
    if (typeof globalThis === 'object') return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if (typeof window === 'object') return window;
    }
  }())),
  (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
  (n.r = (e) => {
    typeof Symbol !== 'undefined'
        && Symbol.toStringTag
        && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(e, '__esModule', { value: true });
  }),
  (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
  (() => {
    const e = {};
    n.r(e),
    n.d(e, {
      afterMain: () => w,
      afterRead: () => y,
      afterWrite: () => E,
      applyStyles: () => P,
      arrow: () => Y,
      auto: () => o,
      basePlacements: () => a,
      beforeMain: () => b,
      beforeRead: () => m,
      beforeWrite: () => x,
      bottom: () => r,
      clippingParents: () => u,
      computeStyles: () => Z,
      createPopper: () => je,
      createPopperBase: () => Ce,
      createPopperLite: () => Ae,
      detectOverflow: () => de,
      end: () => l,
      eventListeners: () => te,
      flip: () => ge,
      hide: () => ye,
      left: () => s,
      main: () => _,
      modifierPhases: () => k,
      offset: () => be,
      placements: () => g,
      popper: () => h,
      popperGenerator: () => Se,
      popperOffsets: () => _e,
      preventOverflow: () => we,
      read: () => v,
      reference: () => p,
      right: () => i,
      start: () => c,
      top: () => t,
      variationPlacements: () => d,
      viewport: () => f,
      write: () => O,
    });
    var t = 'top';
    var r = 'bottom';
    var i = 'right';
    var s = 'left';
    var o = 'auto';
    var a = [t, r, i, s];
    var c = 'start';
    var l = 'end';
    var u = 'clippingParents';
    var f = 'viewport';
    var h = 'popper';
    var p = 'reference';
    var d = a.reduce((e, t) => e.concat([`${t}-${c}`, `${t}-${l}`]), []);
    var g = []
      .concat(a, [o])
      .reduce((e, t) => e.concat([t, `${t}-${c}`, `${t}-${l}`]), []);
    var m = 'beforeRead';
    var v = 'read';
    var y = 'afterRead';
    var b = 'beforeMain';
    var _ = 'main';
    var w = 'afterMain';
    var x = 'beforeWrite';
    var O = 'write';
    var E = 'afterWrite';
    var k = [m, v, y, b, _, w, x, O, E];
    function S(e) {
      return e ? (e.nodeName || '').toLowerCase() : null;
    }
    function C(e) {
      if (e == null) return window;
      if (e.toString() !== '[object Window]') {
        const t = e.ownerDocument;
        return (t && t.defaultView) || window;
      }
      return e;
    }
    function j(e) {
      return e instanceof C(e).Element || e instanceof Element;
    }
    function A(e) {
      return e instanceof C(e).HTMLElement || e instanceof HTMLElement;
    }
    function T(e) {
      return (
        typeof ShadowRoot !== 'undefined'
          && (e instanceof C(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    const P = {
      name: 'applyStyles',
      enabled: true,
      phase: 'write',
      fn(e) {
        const t = e.state;
        Object.keys(t.elements).forEach((e) => {
          const n = t.styles[e] || {};
          const r = t.attributes[e] || {};
          const i = t.elements[e];
          A(i)
              && S(i)
              && (Object.assign(i.style, n),
              Object.keys(r).forEach((e) => {
                const t = r[e];
                false === t
                  ? i.removeAttribute(e)
                  : i.setAttribute(e, true === t ? '' : t);
              }));
        });
      },
      effect(e) {
        const t = e.state;
        const n = {
          popper: {
            position: t.options.strategy,
            left: '0',
            top: '0',
            margin: '0',
          },
          arrow: { position: 'absolute' },
          reference: {},
        };
        return (
          Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function () {
            Object.keys(t.elements).forEach((e) => {
              const r = t.elements[e];
              const i = t.attributes[e] || {};
              const s = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e],
              ).reduce((e, t) => ((e[t] = ''), e), {});
              A(r)
                  && S(r)
                  && (Object.assign(r.style, s),
                  Object.keys(i).forEach((e) => {
                    r.removeAttribute(e);
                  }));
            });
          }
        );
      },
      requires: ['computeStyles'],
    };
    function F(e) {
      return e.split('-')[0];
    }
    const L = Math.max;
    const D = Math.min;
    const N = Math.round;
    function R(e, t) {
      void 0 === t && (t = false);
      const n = e.getBoundingClientRect();
      let r = 1;
      let i = 1;
      if (A(e) && t) {
        const s = e.offsetHeight;
        const o = e.offsetWidth;
        o > 0 && (r = N(n.width) / o || 1),
        s > 0 && (i = N(n.height) / s || 1);
      }
      return {
        width: n.width / r,
        height: n.height / i,
        top: n.top / i,
        right: n.right / r,
        bottom: n.bottom / i,
        left: n.left / r,
        x: n.left / r,
        y: n.top / i,
      };
    }
    function I(e) {
      const t = R(e);
      let n = e.offsetWidth;
      let r = e.offsetHeight;
      return (
        Math.abs(t.width - n) <= 1 && (n = t.width),
        Math.abs(t.height - r) <= 1 && (r = t.height),
        {
          x: e.offsetLeft,
          y: e.offsetTop,
          width: n,
          height: r,
        }
      );
    }
    function M(e, t) {
      const n = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return true;
      if (n && T(n)) {
        let r = t;
        do {
          if (r && e.isSameNode(r)) return true;
          r = r.parentNode || r.host;
        } while (r);
      }
      return false;
    }
    function $(e) {
      return C(e).getComputedStyle(e);
    }
    function z(e) {
      return ['table', 'td', 'th'].indexOf(S(e)) >= 0;
    }
    function U(e) {
      return ((j(e) ? e.ownerDocument : e.document) || window.document)
        .documentElement;
    }
    function H(e) {
      return S(e) === 'html'
        ? e
        : e.assignedSlot || e.parentNode || (T(e) ? e.host : null) || U(e);
    }
    function B(e) {
      return A(e) && $(e).position !== 'fixed' ? e.offsetParent : null;
    }
    function V(e) {
      for (var t = C(e), n = B(e); n && z(n) && $(n).position === 'static';) { n = B(n); }
      return n
          && (S(n) === 'html' || (S(n) === 'body' && $(n).position === 'static'))
        ? t
        : n
              || (function (e) {
                const t = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
                if (
                  navigator.userAgent.indexOf('Trident') !== -1
                  && A(e)
                  && $(e).position === 'fixed'
                ) { return null; }
                for (
                  let n = H(e);
                  A(n) && ['html', 'body'].indexOf(S(n)) < 0;

                ) {
                  const r = $(n);
                  if (
                    r.transform !== 'none'
                    || r.perspective !== 'none'
                    || r.contain === 'paint'
                    || ['transform', 'perspective'].indexOf(r.willChange) !== -1
                    || (t && r.willChange === 'filter')
                    || (t && r.filter && r.filter !== 'none')
                  ) { return n; }
                  n = n.parentNode;
                }
                return null;
              }(e))
              || t;
    }
    function q(e) {
      return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
    }
    function W(e, t, n) {
      return L(e, D(t, n));
    }
    function K(e) {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e,
      };
    }
    function J(e, t) {
      return t.reduce((t, n) => ((t[n] = e), t), {});
    }
    const Y = {
      name: 'arrow',
      enabled: true,
      phase: 'main',
      fn(e) {
        let n;
        const o = e.state;
        const c = e.name;
        const l = e.options;
        const u = o.elements.arrow;
        const f = o.modifiersData.popperOffsets;
        const h = F(o.placement);
        const p = q(h);
        const d = [s, i].indexOf(h) >= 0 ? 'height' : 'width';
        if (u && f) {
          const g = (function (e, t) {
            return K(
              typeof (e = typeof e === 'function'
                ? e({ ...t.rects, placement: t.placement })
                : e) !== 'number'
                ? e
                : J(e, a),
            );
          }(l.padding, o));
          const m = I(u);
          const v = p === 'y' ? t : s;
          const y = p === 'y' ? r : i;
          const b = o.rects.reference[d]
              + o.rects.reference[p]
              - f[p]
              - o.rects.popper[d];
          const _ = f[p] - o.rects.reference[p];
          const w = V(u);
          const x = w
            ? p === 'y'
              ? w.clientHeight || 0
              : w.clientWidth || 0
            : 0;
          const O = b / 2 - _ / 2;
          const E = g[v];
          const k = x - m[d] - g[y];
          const S = x / 2 - m[d] / 2 + O;
          const C = W(E, S, k);
          const j = p;
          o.modifiersData[c] = (((n = {})[j] = C), (n.centerOffset = C - S), n);
        }
      },
      effect(e) {
        const t = e.state;
        const n = e.options.element;
        let r = void 0 === n ? '[data-popper-arrow]' : n;
        r != null
            && (typeof r !== 'string'
              || (r = t.elements.popper.querySelector(r)))
            && M(t.elements.popper, r)
            && (t.elements.arrow = r);
      },
      requires: ['popperOffsets'],
      requiresIfExists: ['preventOverflow'],
    };
    function X(e) {
      return e.split('-')[1];
    }
    const Q = {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
    };
    function G(e) {
      let n;
      const o = e.popper;
      const a = e.popperRect;
      const c = e.placement;
      const u = e.variation;
      const f = e.offsets;
      const h = e.position;
      const p = e.gpuAcceleration;
      const d = e.adaptive;
      const g = e.roundOffsets;
      const m = e.isFixed;
      const v = f.x;
      let y = void 0 === v ? 0 : v;
      const b = f.y;
      let _ = void 0 === b ? 0 : b;
      const w = typeof g === 'function' ? g({ x: y, y: _ }) : { x: y, y: _ };
      (y = w.x), (_ = w.y);
      const x = f.hasOwnProperty('x');
      const O = f.hasOwnProperty('y');
      let E = s;
      let k = t;
      const S = window;
      if (d) {
        let j = V(o);
        let A = 'clientHeight';
        let T = 'clientWidth';
        j === C(o)
            && $((j = U(o))).position !== 'static'
            && h === 'absolute'
            && ((A = 'scrollHeight'), (T = 'scrollWidth')),
        (j = j),
        (c === t || ((c === s || c === i) && u === l))
              && ((k = r),
              (_
                -= (m && S.visualViewport ? S.visualViewport.height : j[A])
                - a.height),
              (_ *= p ? 1 : -1)),
        (c !== s && ((c !== t && c !== r) || u !== l))
              || ((E = i),
              (y
                -= (m && S.visualViewport ? S.visualViewport.width : j[T])
                - a.width),
              (y *= p ? 1 : -1));
      }
      let P;
      const F = { position: h, ...(d && Q) };
      const L = true === g
        ? (function (e) {
          const t = e.x;
          const n = e.y;
          const r = window.devicePixelRatio || 1;
          return { x: N(t * r) / r || 0, y: N(n * r) / r || 0 };
        }({ x: y, y: _ }))
        : { x: y, y: _ };
      return (
        (y = L.x),
        (_ = L.y),
        p
          ? {
            ...F,
            ...(((P = {})[k] = O ? '0' : ''),
            (P[E] = x ? '0' : ''),
            (P.transform = (S.devicePixelRatio || 1) <= 1
              ? `translate(${y}px, ${_}px)`
              : `translate3d(${y}px, ${_}px, 0)`),
            P),
          }
          : {
            ...F,
            ...(((n = {})[k] = O ? `${_}px` : ''),
            (n[E] = x ? `${y}px` : ''),
            (n.transform = ''),
            n),
          }
      );
    }
    const Z = {
      name: 'computeStyles',
      enabled: true,
      phase: 'beforeWrite',
      fn(e) {
        const t = e.state;
        const n = e.options;
        const r = n.gpuAcceleration;
        const i = void 0 === r || r;
        const s = n.adaptive;
        const o = void 0 === s || s;
        const a = n.roundOffsets;
        const c = void 0 === a || a;
        const l = {
          placement: F(t.placement),
          variation: X(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: i,
          isFixed: t.options.strategy === 'fixed',
        };
        t.modifiersData.popperOffsets != null
            && (t.styles.popper = {
              ...t.styles.popper,
              ...G({
                ...l,
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: o,
                roundOffsets: c,
              }),
            }),
        t.modifiersData.arrow != null
              && (t.styles.arrow = {
                ...t.styles.arrow,
                ...G({
                  ...l,
                  offsets: t.modifiersData.arrow,
                  position: 'absolute',
                  adaptive: false,
                  roundOffsets: c,
                }),
              }),
        (t.attributes.popper = {
          ...t.attributes.popper,
          'data-popper-placement': t.placement,
        });
      },
      data: {},
    };
    const ee = { passive: true };
    const te = {
      name: 'eventListeners',
      enabled: true,
      phase: 'write',
      fn() {},
      effect(e) {
        const t = e.state;
        const n = e.instance;
        const r = e.options;
        const i = r.scroll;
        const s = void 0 === i || i;
        const o = r.resize;
        const a = void 0 === o || o;
        const c = C(t.elements.popper);
        const l = [].concat(
          t.scrollParents.reference,
          t.scrollParents.popper,
        );
        return (
          s
              && l.forEach((e) => {
                e.addEventListener('scroll', n.update, ee);
              }),
          a && c.addEventListener('resize', n.update, ee),
          function () {
            s
                && l.forEach((e) => {
                  e.removeEventListener('scroll', n.update, ee);
                }),
            a && c.removeEventListener('resize', n.update, ee);
          }
        );
      },
      data: {},
    };
    const ne = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom',
    };
    function re(e) {
      return e.replace(/left|right|bottom|top/g, (e) => ne[e]);
    }
    const ie = { start: 'end', end: 'start' };
    function se(e) {
      return e.replace(/start|end/g, (e) => ie[e]);
    }
    function oe(e) {
      const t = C(e);
      return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
    }
    function ae(e) {
      return R(U(e)).left + oe(e).scrollLeft;
    }
    function ce(e) {
      const t = $(e);
      const n = t.overflow;
      const r = t.overflowX;
      const i = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(n + i + r);
    }
    function le(e) {
      return ['html', 'body', '#document'].indexOf(S(e)) >= 0
        ? e.ownerDocument.body
        : A(e) && ce(e)
          ? e
          : le(H(e));
    }
    function ue(e, t) {
      let n;
      void 0 === t && (t = []);
      const r = le(e);
      const i = r === ((n = e.ownerDocument) == null ? void 0 : n.body);
      const s = C(r);
      const o = i ? [s].concat(s.visualViewport || [], ce(r) ? r : []) : r;
      const a = t.concat(o);
      return i ? a : a.concat(ue(H(o)));
    }
    function fe(e) {
      return {
        ...e,
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      };
    }
    function he(e, t) {
      return t === f
        ? fe(
          (function (e) {
            const t = C(e);
            const n = U(e);
            const r = t.visualViewport;
            let i = n.clientWidth;
            let s = n.clientHeight;
            let o = 0;
            let a = 0;
            return (
              r
                    && ((i = r.width),
                    (s = r.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent,
                    ) || ((o = r.offsetLeft), (a = r.offsetTop))),
              {
                width: i,
                height: s,
                x: o + ae(e),
                y: a,
              }
            );
          }(e)),
        )
        : j(t)
          ? (function (e) {
            const t = R(e);
            return (
              (t.top += e.clientTop),
              (t.left += e.clientLeft),
              (t.bottom = t.top + e.clientHeight),
              (t.right = t.left + e.clientWidth),
              (t.width = e.clientWidth),
              (t.height = e.clientHeight),
              (t.x = t.left),
              (t.y = t.top),
              t
            );
          }(t))
          : fe(
            (function (e) {
              let t;
              const n = U(e);
              const r = oe(e);
              const i = (t = e.ownerDocument) == null ? void 0 : t.body;
              const s = L(
                n.scrollWidth,
                n.clientWidth,
                i ? i.scrollWidth : 0,
                i ? i.clientWidth : 0,
              );
              const o = L(
                n.scrollHeight,
                n.clientHeight,
                i ? i.scrollHeight : 0,
                i ? i.clientHeight : 0,
              );
              let a = -r.scrollLeft + ae(e);
              const c = -r.scrollTop;
              return (
                $(i || n).direction === 'rtl'
                    && (a += L(n.clientWidth, i ? i.clientWidth : 0) - s),
                {
                  width: s,
                  height: o,
                  x: a,
                  y: c,
                }
              );
            }(U(e))),
          );
    }
    function pe(e) {
      let n;
      const o = e.reference;
      const a = e.element;
      const u = e.placement;
      const f = u ? F(u) : null;
      const h = u ? X(u) : null;
      const p = o.x + o.width / 2 - a.width / 2;
      const d = o.y + o.height / 2 - a.height / 2;
      switch (f) {
        case t:
          n = { x: p, y: o.y - a.height };
          break;
        case r:
          n = { x: p, y: o.y + o.height };
          break;
        case i:
          n = { x: o.x + o.width, y: d };
          break;
        case s:
          n = { x: o.x - a.width, y: d };
          break;
        default:
          n = { x: o.x, y: o.y };
      }
      const g = f ? q(f) : null;
      if (g != null) {
        const m = g === 'y' ? 'height' : 'width';
        switch (h) {
          case c:
            n[g] = n[g] - (o[m] / 2 - a[m] / 2);
            break;
          case l:
            n[g] = n[g] + (o[m] / 2 - a[m] / 2);
        }
      }
      return n;
    }
    function de(e, n) {
      void 0 === n && (n = {});
      const s = n;
      const o = s.placement;
      const c = void 0 === o ? e.placement : o;
      const l = s.boundary;
      const d = void 0 === l ? u : l;
      const g = s.rootBoundary;
      const m = void 0 === g ? f : g;
      const v = s.elementContext;
      const y = void 0 === v ? h : v;
      const b = s.altBoundary;
      const _ = void 0 !== b && b;
      const w = s.padding;
      const x = void 0 === w ? 0 : w;
      const O = K(typeof x !== 'number' ? x : J(x, a));
      const E = y === h ? p : h;
      const k = e.rects.popper;
      const C = e.elements[_ ? E : y];
      const T = (function (e, t, n) {
        const r = t === 'clippingParents'
          ? (function (e) {
            const t = ue(H(e));
            const n = ['absolute', 'fixed'].indexOf($(e).position) >= 0 && A(e)
              ? V(e)
              : e;
            return j(n)
              ? t.filter((e) => j(e) && M(e, n) && S(e) !== 'body')
              : [];
          }(e))
          : [].concat(t);
        const i = [].concat(r, [n]);
        const s = i[0];
        const o = i.reduce((t, n) => {
          const r = he(e, n);
          return (
            (t.top = L(r.top, t.top)),
            (t.right = D(r.right, t.right)),
            (t.bottom = D(r.bottom, t.bottom)),
            (t.left = L(r.left, t.left)),
            t
          );
        }, he(e, s));
        return (
          (o.width = o.right - o.left),
          (o.height = o.bottom - o.top),
          (o.x = o.left),
          (o.y = o.top),
          o
        );
      }(j(C) ? C : C.contextElement || U(e.elements.popper), d, m));
      const P = R(e.elements.reference);
      const F = pe({
        reference: P,
        element: k,
        strategy: 'absolute',
        placement: c,
      });
      const N = fe({ ...k, ...F });
      const I = y === h ? N : P;
      const z = {
        top: T.top - I.top + O.top,
        bottom: I.bottom - T.bottom + O.bottom,
        left: T.left - I.left + O.left,
        right: I.right - T.right + O.right,
      };
      const B = e.modifiersData.offset;
      if (y === h && B) {
        const q = B[c];
        Object.keys(z).forEach((e) => {
          const n = [i, r].indexOf(e) >= 0 ? 1 : -1;
          const s = [t, r].indexOf(e) >= 0 ? 'y' : 'x';
          z[e] += q[s] * n;
        });
      }
      return z;
    }
    const ge = {
      name: 'flip',
      enabled: true,
      phase: 'main',
      fn(e) {
        const n = e.state;
        const l = e.options;
        const u = e.name;
        if (!n.modifiersData[u]._skip) {
          for (
            var f = l.mainAxis,
              h = void 0 === f || f,
              p = l.altAxis,
              m = void 0 === p || p,
              v = l.fallbackPlacements,
              y = l.padding,
              b = l.boundary,
              _ = l.rootBoundary,
              w = l.altBoundary,
              x = l.flipVariations,
              O = void 0 === x || x,
              E = l.allowedAutoPlacements,
              k = n.options.placement,
              S = F(k),
              C = v
                  || (S !== k && O
                    ? (function (e) {
                      if (F(e) === o) return [];
                      const t = re(e);
                      return [se(e), t, se(t)];
                    }(k))
                    : [re(k)]),
              j = [k].concat(C).reduce(
                (e, t) => e.concat(
                  F(t) === o
                    ? (function (e, t) {
                      void 0 === t && (t = {});
                      const n = t;
                      const r = n.placement;
                      const i = n.boundary;
                      const s = n.rootBoundary;
                      const o = n.padding;
                      const c = n.flipVariations;
                      const l = n.allowedAutoPlacements;
                      const u = void 0 === l ? g : l;
                      const f = X(r);
                      const h = f
                        ? c
                          ? d
                          : d.filter((e) => X(e) === f)
                        : a;
                      let p = h.filter((e) => u.indexOf(e) >= 0);
                      p.length === 0 && (p = h);
                      const m = p.reduce(
                        (t, n) => (
                          (t[n] = de(e, {
                            placement: n,
                            boundary: i,
                            rootBoundary: s,
                            padding: o,
                          })[F(n)]),
                          t
                        ),
                        {},
                      );
                      return Object.keys(m).sort((e, t) => m[e] - m[t]);
                    }(n, {
                      placement: t,
                      boundary: b,
                      rootBoundary: _,
                      padding: y,
                      flipVariations: O,
                      allowedAutoPlacements: E,
                    }))
                    : t,
                ),
                [],
              ),
              A = n.rects.reference,
              T = n.rects.popper,
              P = new Map(),
              L = true,
              D = j[0],
              N = 0;
            N < j.length;
            N++
          ) {
            const R = j[N];
            const I = F(R);
            const M = X(R) === c;
            const $ = [t, r].indexOf(I) >= 0;
            const z = $ ? 'width' : 'height';
            const U = de(n, {
              placement: R,
              boundary: b,
              rootBoundary: _,
              altBoundary: w,
              padding: y,
            });
            let H = $ ? (M ? i : s) : M ? r : t;
            A[z] > T[z] && (H = re(H));
            const B = re(H);
            const V = [];
            if (
              (h && V.push(U[I] <= 0),
              m && V.push(U[H] <= 0, U[B] <= 0),
              V.every((e) => e))
            ) {
              (D = R), (L = false);
              break;
            }
            P.set(R, V);
          }
          if (L) {
            for (
              let q = function (e) {
                  const t = j.find((t) => {
                    const n = P.get(t);
                    if (n) return n.slice(0, e).every((e) => e);
                  });
                  if (t) return (D = t), 'break';
                },
                W = O ? 3 : 1;
              W > 0 && q(W) !== 'break';
              W--
            );
          }
          n.placement !== D
              && ((n.modifiersData[u]._skip = true),
              (n.placement = D),
              (n.reset = true));
        }
      },
      requiresIfExists: ['offset'],
      data: { _skip: false },
    };
    function me(e, t, n) {
      return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
          top: e.top - t.height - n.y,
          right: e.right - t.width + n.x,
          bottom: e.bottom - t.height + n.y,
          left: e.left - t.width - n.x,
        }
      );
    }
    function ve(e) {
      return [t, i, r, s].some((t) => e[t] >= 0);
    }
    const ye = {
      name: 'hide',
      enabled: true,
      phase: 'main',
      requiresIfExists: ['preventOverflow'],
      fn(e) {
        const t = e.state;
        const n = e.name;
        const r = t.rects.reference;
        const i = t.rects.popper;
        const s = t.modifiersData.preventOverflow;
        const o = de(t, { elementContext: 'reference' });
        const a = de(t, { altBoundary: true });
        const c = me(o, r);
        const l = me(a, i, s);
        const u = ve(c);
        const f = ve(l);
        (t.modifiersData[n] = {
          referenceClippingOffsets: c,
          popperEscapeOffsets: l,
          isReferenceHidden: u,
          hasPopperEscaped: f,
        }),
        (t.attributes.popper = {
          ...t.attributes.popper,
          'data-popper-reference-hidden': u,
          'data-popper-escaped': f,
        });
      },
    };
    const be = {
      name: 'offset',
      enabled: true,
      phase: 'main',
      requires: ['popperOffsets'],
      fn(e) {
        const n = e.state;
        const r = e.options;
        const o = e.name;
        const a = r.offset;
        const c = void 0 === a ? [0, 0] : a;
        const l = g.reduce(
          (e, r) => (
            (e[r] = (function (e, n, r) {
              const o = F(e);
              const a = [s, t].indexOf(o) >= 0 ? -1 : 1;
              const c = typeof r === 'function' ? r({ ...n, placement: e }) : r;
              let l = c[0];
              let u = c[1];
              return (
                (l = l || 0),
                (u = (u || 0) * a),
                [s, i].indexOf(o) >= 0 ? { x: u, y: l } : { x: l, y: u }
              );
            }(r, n.rects, c))),
            e
          ),
          {},
        );
        const u = l[n.placement];
        const f = u.x;
        const h = u.y;
        n.modifiersData.popperOffsets != null
            && ((n.modifiersData.popperOffsets.x += f),
            (n.modifiersData.popperOffsets.y += h)),
        (n.modifiersData[o] = l);
      },
    };
    const _e = {
      name: 'popperOffsets',
      enabled: true,
      phase: 'read',
      fn(e) {
        const t = e.state;
        const n = e.name;
        t.modifiersData[n] = pe({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: 'absolute',
          placement: t.placement,
        });
      },
      data: {},
    };
    const we = {
      name: 'preventOverflow',
      enabled: true,
      phase: 'main',
      fn(e) {
        const n = e.state;
        const o = e.options;
        const a = e.name;
        const l = o.mainAxis;
        const u = void 0 === l || l;
        const f = o.altAxis;
        const h = void 0 !== f && f;
        const p = o.boundary;
        const d = o.rootBoundary;
        const g = o.altBoundary;
        const m = o.padding;
        const v = o.tether;
        const y = void 0 === v || v;
        const b = o.tetherOffset;
        const _ = void 0 === b ? 0 : b;
        const w = de(n, {
          boundary: p,
          rootBoundary: d,
          padding: m,
          altBoundary: g,
        });
        const x = F(n.placement);
        const O = X(n.placement);
        const E = !O;
        const k = q(x);
        const S = k === 'x' ? 'y' : 'x';
        const C = n.modifiersData.popperOffsets;
        const j = n.rects.reference;
        const A = n.rects.popper;
        const T = typeof _ === 'function'
          ? _({ ...n.rects, placement: n.placement })
          : _;
        const P = typeof T === 'number'
          ? { mainAxis: T, altAxis: T }
          : { mainAxis: 0, altAxis: 0, ...T };
        const N = n.modifiersData.offset
          ? n.modifiersData.offset[n.placement]
          : null;
        const R = { x: 0, y: 0 };
        if (C) {
          if (u) {
            let M;
            const $ = k === 'y' ? t : s;
            const z = k === 'y' ? r : i;
            const U = k === 'y' ? 'height' : 'width';
            const H = C[k];
            const B = H + w[$];
            const K = H - w[z];
            const J = y ? -A[U] / 2 : 0;
            const Y = O === c ? j[U] : A[U];
            const Q = O === c ? -A[U] : -j[U];
            const G = n.elements.arrow;
            const Z = y && G ? I(G) : { width: 0, height: 0 };
            const ee = n.modifiersData['arrow#persistent']
              ? n.modifiersData['arrow#persistent'].padding
              : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              };
            const te = ee[$];
            const ne = ee[z];
            const re = W(0, j[U], Z[U]);
            const ie = E
              ? j[U] / 2 - J - re - te - P.mainAxis
              : Y - re - te - P.mainAxis;
            const se = E
              ? -j[U] / 2 + J + re + ne + P.mainAxis
              : Q + re + ne + P.mainAxis;
            const oe = n.elements.arrow && V(n.elements.arrow);
            const ae = oe
              ? k === 'y'
                ? oe.clientTop || 0
                : oe.clientLeft || 0
              : 0;
            const ce = (M = N == null ? void 0 : N[k]) != null ? M : 0;
            const le = H + se - ce;
            const ue = W(y ? D(B, H + ie - ce - ae) : B, H, y ? L(K, le) : K);
            (C[k] = ue), (R[k] = ue - H);
          }
          if (h) {
            let fe;
            const he = k === 'x' ? t : s;
            const pe = k === 'x' ? r : i;
            const ge = C[S];
            const me = S === 'y' ? 'height' : 'width';
            const ve = ge + w[he];
            const ye = ge - w[pe];
            const be = [t, s].indexOf(x) !== -1;
            const _e = (fe = N == null ? void 0 : N[S]) != null ? fe : 0;
            const we = be ? ve : ge - j[me] - A[me] - _e + P.altAxis;
            const xe = be ? ge + j[me] + A[me] - _e - P.altAxis : ye;
            const Oe = y && be
              ? (function (e, t, n) {
                const r = W(e, t, n);
                return r > n ? n : r;
              }(we, ge, xe))
              : W(y ? we : ve, ge, y ? xe : ye);
            (C[S] = Oe), (R[S] = Oe - ge);
          }
          n.modifiersData[a] = R;
        }
      },
      requiresIfExists: ['offset'],
    };
    function xe(e, t, n) {
      void 0 === n && (n = false);
      let r;
      let i;
      const s = A(t);
      const o = A(t)
          && (function (e) {
            const t = e.getBoundingClientRect();
            const n = N(t.width) / e.offsetWidth || 1;
            const r = N(t.height) / e.offsetHeight || 1;
            return n !== 1 || r !== 1;
          }(t));
      const a = U(t);
      const c = R(e, o);
      let l = { scrollLeft: 0, scrollTop: 0 };
      let u = { x: 0, y: 0 };
      return (
        (s || (!s && !n))
            && ((S(t) !== 'body' || ce(a))
              && (l = (r = t) !== C(r) && A(r)
                ? { scrollLeft: (i = r).scrollLeft, scrollTop: i.scrollTop }
                : oe(r)),
            A(t)
              ? (((u = R(t, true)).x += t.clientLeft), (u.y += t.clientTop))
              : a && (u.x = ae(a))),
        {
          x: c.left + l.scrollLeft - u.x,
          y: c.top + l.scrollTop - u.y,
          width: c.width,
          height: c.height,
        }
      );
    }
    function Oe(e) {
      const t = new Map();
      const n = new Set();
      const r = [];
      function i(e) {
        n.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach((e) => {
            if (!n.has(e)) {
              const r = t.get(e);
              r && i(r);
            }
          }),
        r.push(e);
      }
      return (
        e.forEach((e) => {
          t.set(e.name, e);
        }),
        e.forEach((e) => {
          n.has(e.name) || i(e);
        }),
        r
      );
    }
    const Ee = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
    function ke() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) { t[n] = arguments[n]; }
      return !t.some(
        (e) => !(e && typeof e.getBoundingClientRect === 'function'),
      );
    }
    function Se(e) {
      void 0 === e && (e = {});
      const t = e;
      const n = t.defaultModifiers;
      const r = void 0 === n ? [] : n;
      const i = t.defaultOptions;
      const s = void 0 === i ? Ee : i;
      return function (e, t, n) {
        void 0 === n && (n = s);
        let i;
        let o;
        let a = {
          placement: 'bottom',
          orderedModifiers: [],
          options: { ...Ee, ...s },
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        };
        let c = [];
        let l = false;
        var u = {
          state: a,
          setOptions(n) {
            const i = typeof n === 'function' ? n(a.options) : n;
            f(),
            (a.options = { ...s, ...a.options, ...i }),
            (a.scrollParents = {
              reference: j(e)
                ? ue(e)
                : e.contextElement
                  ? ue(e.contextElement)
                  : [],
              popper: ue(t),
            });
            let o;
            let l;
            const h = (function (e) {
              const t = Oe(e);
              return k.reduce(
                (e, n) => e.concat(t.filter((e) => e.phase === n)),
                [],
              );
            }(
              ((o = [].concat(r, a.options.modifiers)),
              (l = o.reduce((e, t) => {
                const n = e[t.name];
                return (
                  (e[t.name] = n
                    ? {
                      ...n,
                      ...t,
                      options: { ...n.options, ...t.options },
                      data: { ...n.data, ...t.data },
                    }
                    : t),
                  e
                );
              }, {})),
              Object.keys(l).map((e) => l[e])),
            ));
            return (
              (a.orderedModifiers = h.filter((e) => e.enabled)),
              a.orderedModifiers.forEach((e) => {
                const t = e.name;
                const n = e.options;
                const r = void 0 === n ? {} : n;
                const i = e.effect;
                if (typeof i === 'function') {
                  const s = i({
                    state: a,
                    name: t,
                    instance: u,
                    options: r,
                  });
                  c.push(s || (() => {}));
                }
              }),
              u.update()
            );
          },
          forceUpdate() {
            if (!l) {
              const e = a.elements;
              const t = e.reference;
              const n = e.popper;
              if (ke(t, n)) {
                (a.rects = {
                  reference: xe(t, V(n), a.options.strategy === 'fixed'),
                  popper: I(n),
                }),
                (a.reset = false),
                (a.placement = a.options.placement),
                a.orderedModifiers.forEach(
                  (e) => (a.modifiersData[e.name] = { ...e.data }),
                );
                for (let r = 0; r < a.orderedModifiers.length; r++) {
                  if (true !== a.reset) {
                    const i = a.orderedModifiers[r];
                    const s = i.fn;
                    const o = i.options;
                    const c = void 0 === o ? {} : o;
                    const f = i.name;
                    typeof s === 'function'
                        && (a = s({
                          state: a,
                          options: c,
                          name: f,
                          instance: u,
                        }) || a);
                  } else (a.reset = false), (r = -1);
                }
              }
            }
          },
          update:
              ((i = function () {
                return new Promise((e) => {
                  u.forceUpdate(), e(a);
                });
              }),
              function () {
                return (
                  o
                    || (o = new Promise((e) => {
                      Promise.resolve().then(() => {
                        (o = void 0), e(i());
                      });
                    })),
                  o
                );
              }),
          destroy() {
            f(), (l = true);
          },
        };
        if (!ke(e, t)) return u;
        function f() {
          c.forEach((e) => e()), (c = []);
        }
        return (
          u.setOptions(n).then((e) => {
            !l && n.onFirstUpdate && n.onFirstUpdate(e);
          }),
          u
        );
      };
    }
    var Ce = Se();
    var je = Se({ defaultModifiers: [te, _e, Z, P, be, ge, we, Y, ye] });
    var Ae = Se({ defaultModifiers: [te, _e, Z, P] });
    const Te = 'transitionend';
    const Pe = (e) => {
      let t = e.getAttribute('data-bs-target');
      if (!t || t === '#') {
        let n = e.getAttribute('href');
        if (!n || (!n.includes('#') && !n.startsWith('.'))) return null;
        n.includes('#') && !n.startsWith('#') && (n = `#${n.split('#')[1]}`),
        (t = n && n !== '#' ? n.trim() : null);
      }
      return t;
    };
    const Fe = (e) => {
      const t = Pe(e);
      return t && document.querySelector(t) ? t : null;
    };
    const Le = (e) => {
      const t = Pe(e);
      return t ? document.querySelector(t) : null;
    };
    const De = (e) => {
      e.dispatchEvent(new Event(Te));
    };
    const Ne = (e) => !(!e || typeof e !== 'object')
        && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType);
    const Re = (e) => (Ne(e)
      ? e.jquery
        ? e[0]
        : e
      : typeof e === 'string' && e.length > 0
        ? document.querySelector(e)
        : null);
    const Ie = (e, t, n) => {
      Object.keys(n).forEach((r) => {
        const i = n[r];
        const s = t[r];
        const o = s && Ne(s)
          ? 'element'
          : (a = s) == null
            ? `${a}`
            : {}.toString
              .call(a)
              .match(/\s([a-z]+)/i)[1]
              .toLowerCase();
        let a;
        if (!new RegExp(i).test(o)) {
          throw new TypeError(
            `${e.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`,
          );
        }
      });
    };
    const Me = (e) => !(!Ne(e) || e.getClientRects().length === 0)
        && getComputedStyle(e).getPropertyValue('visibility') === 'visible';
    const $e = (e) => !e
        || e.nodeType !== Node.ELEMENT_NODE
        || !!e.classList.contains('disabled')
        || (void 0 !== e.disabled
          ? e.disabled
          : e.hasAttribute('disabled')
            && e.getAttribute('disabled') !== 'false');
    const ze = (e) => {
      if (!document.documentElement.attachShadow) return null;
      if (typeof e.getRootNode === 'function') {
        const t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }
      return e instanceof ShadowRoot
        ? e
        : e.parentNode
          ? ze(e.parentNode)
          : null;
    };
    const Ue = () => {};
    const He = (e) => {
      e.offsetHeight;
    };
    const Be = () => {
      const { jQuery: e } = window;
      return e && !document.body.hasAttribute('data-bs-no-jquery') ? e : null;
    };
    const Ve = [];
    const qe = () => document.documentElement.dir === 'rtl';
    const We = (e) => {
      let t;
      (t = () => {
        const t = Be();
        if (t) {
          const n = e.NAME;
          const r = t.fn[n];
          (t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = r), e.jQueryInterface));
        }
      }),
      document.readyState === 'loading'
        ? (Ve.length
                || document.addEventListener('DOMContentLoaded', () => {
                  Ve.forEach((e) => e());
                }),
        Ve.push(t))
        : t();
    };
    const Ke = (e) => {
      typeof e === 'function' && e();
    };
    const Je = (e, t, n = true) => {
      if (!n) return void Ke(e);
      const r = ((e) => {
        if (!e) return 0;
        let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
        const r = Number.parseFloat(t);
        const i = Number.parseFloat(n);
        return r || i
          ? ((t = t.split(',')[0]),
          (n = n.split(',')[0]),
          1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
          : 0;
      })(t) + 5;
      let i = false;
      const s = ({ target: n }) => {
        n === t && ((i = true), t.removeEventListener(Te, s), Ke(e));
      };
      t.addEventListener(Te, s),
      setTimeout(() => {
        i || De(t);
      }, r);
    };
    const Ye = (e, t, n, r) => {
      let i = e.indexOf(t);
      if (i === -1) return e[!n && r ? e.length - 1 : 0];
      const s = e.length;
      return (
        (i += n ? 1 : -1),
        r && (i = (i + s) % s),
        e[Math.max(0, Math.min(i, s - 1))]
      );
    };
    const Xe = /[^.]*(?=\..*)\.|.*/;
    const Qe = /\..*/;
    const Ge = /::\d+$/;
    const Ze = {};
    let et = 1;
    const tt = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
    const nt = /^(mouseenter|mouseleave)/i;
    const rt = new Set([
      'click',
      'dblclick',
      'mouseup',
      'mousedown',
      'contextmenu',
      'mousewheel',
      'DOMMouseScroll',
      'mouseover',
      'mouseout',
      'mousemove',
      'selectstart',
      'selectend',
      'keydown',
      'keypress',
      'keyup',
      'orientationchange',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'pointerdown',
      'pointermove',
      'pointerup',
      'pointerleave',
      'pointercancel',
      'gesturestart',
      'gesturechange',
      'gestureend',
      'focus',
      'blur',
      'change',
      'reset',
      'select',
      'submit',
      'focusin',
      'focusout',
      'load',
      'unload',
      'beforeunload',
      'resize',
      'move',
      'DOMContentLoaded',
      'readystatechange',
      'error',
      'abort',
      'scroll',
    ]);
    function it(e, t) {
      return (t && `${t}::${et++}`) || e.uidEvent || et++;
    }
    function st(e) {
      const t = it(e);
      return (e.uidEvent = t), (Ze[t] = Ze[t] || {}), Ze[t];
    }
    function ot(e, t, n = null) {
      const r = Object.keys(e);
      for (let i = 0, s = r.length; i < s; i++) {
        const s = e[r[i]];
        if (s.originalHandler === t && s.delegationSelector === n) return s;
      }
      return null;
    }
    function at(e, t, n) {
      const r = typeof t === 'string';
      const i = r ? n : t;
      let s = ut(e);
      return rt.has(s) || (s = e), [r, i, s];
    }
    function ct(e, t, n, r, i) {
      if (typeof t !== 'string' || !e) return;
      if ((n || ((n = r), (r = null)), nt.test(t))) {
        const e = (e) => function (t) {
          if (
            !t.relatedTarget
                || (t.relatedTarget !== t.delegateTarget
                  && !t.delegateTarget.contains(t.relatedTarget))
          ) { return e.call(this, t); }
        };
        r ? (r = e(r)) : (n = e(n));
      }
      const [s, o, a] = at(t, n, r);
      const c = st(e);
      const l = c[a] || (c[a] = {});
      const u = ot(l, o, s ? n : null);
      if (u) return void (u.oneOff = u.oneOff && i);
      const f = it(o, t.replace(Xe, ''));
      const h = s
        ? (function (e, t, n) {
          return function r(i) {
            const s = e.querySelectorAll(t);
            for (let { target: o } = i; o && o !== this; o = o.parentNode) {
              for (let a = s.length; a--;) {
                if (s[a] === o) {
                  return (
                    (i.delegateTarget = o),
                    r.oneOff && ft.off(e, i.type, t, n),
                    n.apply(o, [i])
                  );
                }
              }
            }
            return null;
          };
        }(e, n, r))
        : (function (e, t) {
          return function n(r) {
            return (
              (r.delegateTarget = e),
              n.oneOff && ft.off(e, r.type, t),
              t.apply(e, [r])
            );
          };
        }(e, n));
      (h.delegationSelector = s ? n : null),
      (h.originalHandler = o),
      (h.oneOff = i),
      (h.uidEvent = f),
      (l[f] = h),
      e.addEventListener(a, h, s);
    }
    function lt(e, t, n, r, i) {
      const s = ot(t[n], r, i);
      s && (e.removeEventListener(n, s, Boolean(i)), delete t[n][s.uidEvent]);
    }
    function ut(e) {
      return (e = e.replace(Qe, '')), tt[e] || e;
    }
    const ft = {
      on(e, t, n, r) {
        ct(e, t, n, r, false);
      },
      one(e, t, n, r) {
        ct(e, t, n, r, true);
      },
      off(e, t, n, r) {
        if (typeof t !== 'string' || !e) return;
        const [i, s, o] = at(t, n, r);
        const a = o !== t;
        const c = st(e);
        const l = t.startsWith('.');
        if (void 0 !== s) {
          if (!c || !c[o]) return;
          return void lt(e, c, o, s, i ? n : null);
        }
        l
            && Object.keys(c).forEach((n) => {
              !(function (e, t, n, r) {
                const i = t[n] || {};
                Object.keys(i).forEach((s) => {
                  if (s.includes(r)) {
                    const r = i[s];
                    lt(e, t, n, r.originalHandler, r.delegationSelector);
                  }
                });
              }(e, c, n, t.slice(1)));
            });
        const u = c[o] || {};
        Object.keys(u).forEach((n) => {
          const r = n.replace(Ge, '');
          if (!a || t.includes(r)) {
            const t = u[n];
            lt(e, c, o, t.originalHandler, t.delegationSelector);
          }
        });
      },
      trigger(e, t, n) {
        if (typeof t !== 'string' || !e) return null;
        const r = Be();
        const i = ut(t);
        const s = t !== i;
        const o = rt.has(i);
        let a;
        let c = true;
        let l = true;
        let u = false;
        let f = null;
        return (
          s
              && r
              && ((a = r.Event(t, n)),
              r(e).trigger(a),
              (c = !a.isPropagationStopped()),
              (l = !a.isImmediatePropagationStopped()),
              (u = a.isDefaultPrevented())),
          o
            ? ((f = document.createEvent('HTMLEvents')),
            f.initEvent(i, c, true))
            : (f = new CustomEvent(t, { bubbles: c, cancelable: true })),
          void 0 !== n
              && Object.keys(n).forEach((e) => {
                Object.defineProperty(f, e, { get: () => n[e] });
              }),
          u && f.preventDefault(),
          l && e.dispatchEvent(f),
          f.defaultPrevented && void 0 !== a && a.preventDefault(),
          f
        );
      },
    };
    const ht = new Map();
    const pt = {
      set(e, t, n) {
        ht.has(e) || ht.set(e, new Map());
        const r = ht.get(e);
        r.has(t) || r.size === 0
          ? r.set(t, n)
          : console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(r.keys())[0]
            }.`,
          );
      },
      get: (e, t) => (ht.has(e) && ht.get(e).get(t)) || null,
      remove(e, t) {
        if (!ht.has(e)) return;
        const n = ht.get(e);
        n.delete(t), n.size === 0 && ht.delete(e);
      },
    };
    class dt {
      constructor(e) {
        (e = Re(e))
            && ((this._element = e),
            pt.set(this._element, this.constructor.DATA_KEY, this));
      }

      dispose() {
        pt.remove(this._element, this.constructor.DATA_KEY),
        ft.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((e) => {
          this[e] = null;
        });
      }

      _queueCallback(e, t, n = true) {
        Je(e, t, n);
      }

      static getInstance(e) {
        return pt.get(Re(e), this.DATA_KEY);
      }

      static getOrCreateInstance(e, t = {}) {
        return (
          this.getInstance(e) || new this(e, typeof t === 'object' ? t : null)
        );
      }

      static get VERSION() {
        return '5.1.3';
      }

      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!',
        );
      }

      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }

      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
    }
    const gt = (e, t = 'hide') => {
      const n = `click.dismiss${e.EVENT_KEY}`;
      const r = e.NAME;
      ft.on(document, n, `[data-bs-dismiss="${r}"]`, function (n) {
        if (
          (['A', 'AREA'].includes(this.tagName) && n.preventDefault(),
          $e(this))
        ) { return; }
        const i = Le(this) || this.closest(`.${r}`);
        e.getOrCreateInstance(i)[t]();
      });
    };
    class mt extends dt {
      static get NAME() {
        return 'alert';
      }

      close() {
        if (ft.trigger(this._element, 'close.bs.alert').defaultPrevented) { return; }
        this._element.classList.remove('show');
        const e = this._element.classList.contains('fade');
        this._queueCallback(() => this._destroyElement(), this._element, e);
      }

      _destroyElement() {
        this._element.remove(),
        ft.trigger(this._element, 'closed.bs.alert'),
        this.dispose();
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = mt.getOrCreateInstance(this);
          if (typeof e === 'string') {
            if (void 0 === t[e] || e.startsWith('_') || e === 'constructor') { throw new TypeError(`No method named "${e}"`); }
            t[e](this);
          }
        });
      }
    }
    gt(mt, 'close'), We(mt);
    const vt = '[data-bs-toggle="button"]';
    class yt extends dt {
      static get NAME() {
        return 'button';
      }

      toggle() {
        this._element.setAttribute(
          'aria-pressed',
          this._element.classList.toggle('active'),
        );
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = yt.getOrCreateInstance(this);
          e === 'toggle' && t[e]();
        });
      }
    }
    function bt(e) {
      return (
        e === 'true'
          || (e !== 'false'
            && (e === Number(e).toString()
              ? Number(e)
              : e === '' || e === 'null'
                ? null
                : e))
      );
    }
    function _t(e) {
      return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
    }
    ft.on(document, 'click.bs.button.data-api', vt, (e) => {
      e.preventDefault();
      const t = e.target.closest(vt);
      yt.getOrCreateInstance(t).toggle();
    }),
    We(yt);
    const wt = {
      setDataAttribute(e, t, n) {
        e.setAttribute(`data-bs-${_t(t)}`, n);
      },
      removeDataAttribute(e, t) {
        e.removeAttribute(`data-bs-${_t(t)}`);
      },
      getDataAttributes(e) {
        if (!e) return {};
        const t = {};
        return (
          Object.keys(e.dataset)
            .filter((e) => e.startsWith('bs'))
            .forEach((n) => {
              let r = n.replace(/^bs/, '');
              (r = r.charAt(0).toLowerCase() + r.slice(1, r.length)),
              (t[r] = bt(e.dataset[n]));
            }),
          t
        );
      },
      getDataAttribute: (e, t) => bt(e.getAttribute(`data-bs-${_t(t)}`)),
      offset(e) {
        const t = e.getBoundingClientRect();
        return {
          top: t.top + window.pageYOffset,
          left: t.left + window.pageXOffset,
        };
      },
      position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
    };
    const xt = {
      find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
      findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
      children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
      parents(e, t) {
        const n = [];
        let r = e.parentNode;
        for (; r && r.nodeType === Node.ELEMENT_NODE && r.nodeType !== 3;) { r.matches(t) && n.push(r), (r = r.parentNode); }
        return n;
      },
      prev(e, t) {
        let n = e.previousElementSibling;
        for (; n;) {
          if (n.matches(t)) return [n];
          n = n.previousElementSibling;
        }
        return [];
      },
      next(e, t) {
        let n = e.nextElementSibling;
        for (; n;) {
          if (n.matches(t)) return [n];
          n = n.nextElementSibling;
        }
        return [];
      },
      focusableChildren(e) {
        const t = [
          'a',
          'button',
          'input',
          'textarea',
          'select',
          'details',
          '[tabindex]',
          '[contenteditable="true"]',
        ]
          .map((e) => `${e}:not([tabindex^="-"])`)
          .join(', ');
        return this.find(t, e).filter((e) => !$e(e) && Me(e));
      },
    };
    const Ot = 'carousel';
    const Et = {
      interval: 5e3,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true,
      touch: true,
    };
    const kt = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean',
    };
    const St = 'next';
    const Ct = 'prev';
    const jt = 'left';
    const At = 'right';
    const Tt = { ArrowLeft: At, ArrowRight: jt };
    const Pt = 'slid.bs.carousel';
    const Ft = 'active';
    const Lt = '.active.carousel-item';
    class Dt extends dt {
      constructor(e, t) {
        super(e),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = false),
        (this._isSliding = false),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(t)),
        (this._indicatorsElement = xt.findOne(
          '.carousel-indicators',
          this._element,
        )),
        (this._touchSupported = 'ontouchstart' in document.documentElement
              || navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
      }

      static get Default() {
        return Et;
      }

      static get NAME() {
        return Ot;
      }

      next() {
        this._slide(St);
      }

      nextWhenVisible() {
        !document.hidden && Me(this._element) && this.next();
      }

      prev() {
        this._slide(Ct);
      }

      pause(e) {
        e || (this._isPaused = true),
        xt.findOne(
          '.carousel-item-next, .carousel-item-prev',
          this._element,
        ) && (De(this._element), this.cycle(true)),
        clearInterval(this._interval),
        (this._interval = null);
      }

      cycle(e) {
        e || (this._isPaused = false),
        this._interval
              && (clearInterval(this._interval), (this._interval = null)),
        this._config
              && this._config.interval
              && !this._isPaused
              && (this._updateInterval(),
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval,
              )));
      }

      to(e) {
        this._activeElement = xt.findOne(Lt, this._element);
        const t = this._getItemIndex(this._activeElement);
        if (e > this._items.length - 1 || e < 0) return;
        if (this._isSliding) { return void ft.one(this._element, Pt, () => this.to(e)); }
        if (t === e) return this.pause(), void this.cycle();
        const n = e > t ? St : Ct;
        this._slide(n, this._items[e]);
      }

      _getConfig(e) {
        return (
          (e = {
            ...Et,
            ...wt.getDataAttributes(this._element),
            ...(typeof e === 'object' ? e : {}),
          }),
          Ie(Ot, e, kt),
          e
        );
      }

      _handleSwipe() {
        const e = Math.abs(this.touchDeltaX);
        if (e <= 40) return;
        const t = e / this.touchDeltaX;
        (this.touchDeltaX = 0), t && this._slide(t > 0 ? At : jt);
      }

      _addEventListeners() {
        this._config.keyboard
            && ft.on(this._element, 'keydown.bs.carousel', (e) => this._keydown(e)),
        this._config.pause === 'hover'
              && (ft.on(this._element, 'mouseenter.bs.carousel', (e) => this.pause(e)),
              ft.on(this._element, 'mouseleave.bs.carousel', (e) => this.cycle(e))),
        this._config.touch
              && this._touchSupported
              && this._addTouchEventListeners();
      }

      _addTouchEventListeners() {
        const e = (e) => this._pointerEvent
            && (e.pointerType === 'pen' || e.pointerType === 'touch');
        const t = (t) => {
          e(t)
            ? (this.touchStartX = t.clientX)
            : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
        };
        const n = (e) => {
          this.touchDeltaX = e.touches && e.touches.length > 1
            ? 0
            : e.touches[0].clientX - this.touchStartX;
        };
        const r = (t) => {
          e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
          this._handleSwipe(),
          this._config.pause === 'hover'
                && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  (e) => this.cycle(e),
                  500 + this._config.interval,
                )));
        };
        xt.find('.carousel-item img', this._element).forEach((e) => {
          ft.on(e, 'dragstart.bs.carousel', (e) => e.preventDefault());
        }),
        this._pointerEvent
          ? (ft.on(this._element, 'pointerdown.bs.carousel', (e) => t(e)),
          ft.on(this._element, 'pointerup.bs.carousel', (e) => r(e)),
          this._element.classList.add('pointer-event'))
          : (ft.on(this._element, 'touchstart.bs.carousel', (e) => t(e)),
          ft.on(this._element, 'touchmove.bs.carousel', (e) => n(e)),
          ft.on(this._element, 'touchend.bs.carousel', (e) => r(e)));
      }

      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const t = Tt[e.key];
        t && (e.preventDefault(), this._slide(t));
      }

      _getItemIndex(e) {
        return (
          (this._items = e && e.parentNode ? xt.find('.carousel-item', e.parentNode) : []),
          this._items.indexOf(e)
        );
      }

      _getItemByOrder(e, t) {
        const n = e === St;
        return Ye(this._items, t, n, this._config.wrap);
      }

      _triggerSlideEvent(e, t) {
        const n = this._getItemIndex(e);
        const r = this._getItemIndex(xt.findOne(Lt, this._element));
        return ft.trigger(this._element, 'slide.bs.carousel', {
          relatedTarget: e,
          direction: t,
          from: r,
          to: n,
        });
      }

      _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          const t = xt.findOne('.active', this._indicatorsElement);
          t.classList.remove(Ft), t.removeAttribute('aria-current');
          const n = xt.find('[data-bs-target]', this._indicatorsElement);
          for (let t = 0; t < n.length; t++) {
            if (
              Number.parseInt(n[t].getAttribute('data-bs-slide-to'), 10)
                === this._getItemIndex(e)
            ) {
              n[t].classList.add(Ft),
              n[t].setAttribute('aria-current', 'true');
              break;
            }
          }
        }
      }

      _updateInterval() {
        const e = this._activeElement || xt.findOne(Lt, this._element);
        if (!e) return;
        const t = Number.parseInt(e.getAttribute('data-bs-interval'), 10);
        t
          ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval),
          (this._config.interval = t))
          : (this._config.interval = this._config.defaultInterval || this._config.interval);
      }

      _slide(e, t) {
        const n = this._directionToOrder(e);
        const r = xt.findOne(Lt, this._element);
        const i = this._getItemIndex(r);
        const s = t || this._getItemByOrder(n, r);
        const o = this._getItemIndex(s);
        const a = Boolean(this._interval);
        const c = n === St;
        const l = c ? 'carousel-item-start' : 'carousel-item-end';
        const u = c ? 'carousel-item-next' : 'carousel-item-prev';
        const f = this._orderToDirection(n);
        if (s && s.classList.contains(Ft)) return void (this._isSliding = false);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(s, f).defaultPrevented) return;
        if (!r || !s) return;
        (this._isSliding = true),
        a && this.pause(),
        this._setActiveIndicatorElement(s),
        (this._activeElement = s);
        const h = () => {
          ft.trigger(this._element, Pt, {
            relatedTarget: s,
            direction: f,
            from: i,
            to: o,
          });
        };
        if (this._element.classList.contains('slide')) {
          s.classList.add(u), He(s), r.classList.add(l), s.classList.add(l);
          const e = () => {
            s.classList.remove(l, u),
            s.classList.add(Ft),
            r.classList.remove(Ft, u, l),
            (this._isSliding = false),
            setTimeout(h, 0);
          };
          this._queueCallback(e, r, true);
        } else {
          r.classList.remove(Ft),
          s.classList.add(Ft),
          (this._isSliding = false),
          h();
        }
        a && this.cycle();
      }

      _directionToOrder(e) {
        return [At, jt].includes(e)
          ? qe()
            ? e === jt
              ? Ct
              : St
            : e === jt
              ? St
              : Ct
          : e;
      }

      _orderToDirection(e) {
        return [St, Ct].includes(e)
          ? qe()
            ? e === Ct
              ? jt
              : At
            : e === Ct
              ? At
              : jt
          : e;
      }

      static carouselInterface(e, t) {
        const n = Dt.getOrCreateInstance(e, t);
        let { _config: r } = n;
        typeof t === 'object' && (r = { ...r, ...t });
        const i = typeof t === 'string' ? t : r.slide;
        if (typeof t === 'number') n.to(t);
        else if (typeof i === 'string') {
          if (void 0 === n[i]) throw new TypeError(`No method named "${i}"`);
          n[i]();
        } else r.interval && r.ride && (n.pause(), n.cycle());
      }

      static jQueryInterface(e) {
        return this.each(function () {
          Dt.carouselInterface(this, e);
        });
      }

      static dataApiClickHandler(e) {
        const t = Le(this);
        if (!t || !t.classList.contains('carousel')) return;
        const n = {
          ...wt.getDataAttributes(t),
          ...wt.getDataAttributes(this),
        };
        const r = this.getAttribute('data-bs-slide-to');
        r && (n.interval = false),
        Dt.carouselInterface(t, n),
        r && Dt.getInstance(t).to(r),
        e.preventDefault();
      }
    }
    ft.on(
      document,
      'click.bs.carousel.data-api',
      '[data-bs-slide], [data-bs-slide-to]',
      Dt.dataApiClickHandler,
    ),
    ft.on(window, 'load.bs.carousel.data-api', () => {
      const e = xt.find('[data-bs-ride="carousel"]');
      for (let t = 0, n = e.length; t < n; t++) { Dt.carouselInterface(e[t], Dt.getInstance(e[t])); }
    }),
    We(Dt);
    const Nt = 'collapse';
    const Rt = { toggle: true, parent: null };
    const It = { toggle: 'boolean', parent: '(null|element)' };
    const Mt = 'show';
    const $t = 'collapse';
    const zt = 'collapsing';
    const Ut = 'collapsed';
    const Ht = ':scope .collapse .collapse';
    const Bt = '[data-bs-toggle="collapse"]';
    class Vt extends dt {
      constructor(e, t) {
        super(e),
        (this._isTransitioning = false),
        (this._config = this._getConfig(t)),
        (this._triggerArray = []);
        const n = xt.find(Bt);
        for (let e = 0, t = n.length; e < t; e++) {
          const t = n[e];
          const r = Fe(t);
          const i = xt.find(r).filter((e) => e === this._element);
          r !== null
              && i.length
              && ((this._selector = r), this._triggerArray.push(t));
        }
        this._initializeChildren(),
        this._config.parent
              || this._addAriaAndCollapsedClass(
                this._triggerArray,
                this._isShown(),
              ),
        this._config.toggle && this.toggle();
      }

      static get Default() {
        return Rt;
      }

      static get NAME() {
        return Nt;
      }

      toggle() {
        this._isShown() ? this.hide() : this.show();
      }

      show() {
        if (this._isTransitioning || this._isShown()) return;
        let e;
        let t = [];
        if (this._config.parent) {
          const e = xt.find(Ht, this._config.parent);
          t = xt
            .find('.collapse.show, .collapse.collapsing', this._config.parent)
            .filter((t) => !e.includes(t));
        }
        const n = xt.findOne(this._selector);
        if (t.length) {
          const r = t.find((e) => n !== e);
          if (((e = r ? Vt.getInstance(r) : null), e && e._isTransitioning)) { return; }
        }
        if (ft.trigger(this._element, 'show.bs.collapse').defaultPrevented) { return; }
        t.forEach((t) => {
          n !== t && Vt.getOrCreateInstance(t, { toggle: false }).hide(),
          e || pt.set(t, 'bs.collapse', null);
        });
        const r = this._getDimension();
        this._element.classList.remove($t),
        this._element.classList.add(zt),
        (this._element.style[r] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, true),
        (this._isTransitioning = true);
        const i = `scroll${r[0].toUpperCase() + r.slice(1)}`;
        this._queueCallback(
          () => {
            (this._isTransitioning = false),
            this._element.classList.remove(zt),
            this._element.classList.add($t, Mt),
            (this._element.style[r] = ''),
            ft.trigger(this._element, 'shown.bs.collapse');
          },
          this._element,
          true,
        ),
        (this._element.style[r] = `${this._element[i]}px`);
      }

      hide() {
        if (this._isTransitioning || !this._isShown()) return;
        if (ft.trigger(this._element, 'hide.bs.collapse').defaultPrevented) { return; }
        const e = this._getDimension();
        (this._element.style[e] = `${
          this._element.getBoundingClientRect()[e]
        }px`),
        He(this._element),
        this._element.classList.add(zt),
        this._element.classList.remove($t, Mt);
        const t = this._triggerArray.length;
        for (let e = 0; e < t; e++) {
          const t = this._triggerArray[e];
          const n = Le(t);
          n && !this._isShown(n) && this._addAriaAndCollapsedClass([t], false);
        }
        (this._isTransitioning = true),
        (this._element.style[e] = ''),
        this._queueCallback(
          () => {
            (this._isTransitioning = false),
            this._element.classList.remove(zt),
            this._element.classList.add($t),
            ft.trigger(this._element, 'hidden.bs.collapse');
          },
          this._element,
          true,
        );
      }

      _isShown(e = this._element) {
        return e.classList.contains(Mt);
      }

      _getConfig(e) {
        return (
          ((e = {
            ...Rt,
            ...wt.getDataAttributes(this._element),
            ...e,
          }).toggle = Boolean(e.toggle)),
          (e.parent = Re(e.parent)),
          Ie(Nt, e, It),
          e
        );
      }

      _getDimension() {
        return this._element.classList.contains('collapse-horizontal')
          ? 'width'
          : 'height';
      }

      _initializeChildren() {
        if (!this._config.parent) return;
        const e = xt.find(Ht, this._config.parent);
        xt.find(Bt, this._config.parent)
          .filter((t) => !e.includes(t))
          .forEach((e) => {
            const t = Le(e);
            t && this._addAriaAndCollapsedClass([e], this._isShown(t));
          });
      }

      _addAriaAndCollapsedClass(e, t) {
        e.length
            && e.forEach((e) => {
              t ? e.classList.remove(Ut) : e.classList.add(Ut),
              e.setAttribute('aria-expanded', t);
            });
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = {};
          typeof e === 'string' && /show|hide/.test(e) && (t.toggle = false);
          const n = Vt.getOrCreateInstance(this, t);
          if (typeof e === 'string') {
            if (void 0 === n[e]) { throw new TypeError(`No method named "${e}"`); }
            n[e]();
          }
        });
      }
    }
    ft.on(document, 'click.bs.collapse.data-api', Bt, function (e) {
      (e.target.tagName === 'A'
          || (e.delegateTarget && e.delegateTarget.tagName === 'A'))
          && e.preventDefault();
      const t = Fe(this);
      xt.find(t).forEach((e) => {
        Vt.getOrCreateInstance(e, { toggle: false }).toggle();
      });
    }),
    We(Vt);
    const qt = 'dropdown';
    const Wt = 'Escape';
    const Kt = 'Space';
    const Jt = 'ArrowUp';
    const Yt = 'ArrowDown';
    const Xt = new RegExp('ArrowUp|ArrowDown|Escape');
    const Qt = 'click.bs.dropdown.data-api';
    const Gt = 'keydown.bs.dropdown.data-api';
    const Zt = 'show';
    const en = '[data-bs-toggle="dropdown"]';
    const tn = '.dropdown-menu';
    const nn = qe() ? 'top-end' : 'top-start';
    const rn = qe() ? 'top-start' : 'top-end';
    const sn = qe() ? 'bottom-end' : 'bottom-start';
    const on = qe() ? 'bottom-start' : 'bottom-end';
    const an = qe() ? 'left-start' : 'right-start';
    const cn = qe() ? 'right-start' : 'left-start';
    const ln = {
      offset: [0, 2],
      boundary: 'clippingParents',
      reference: 'toggle',
      display: 'dynamic',
      popperConfig: null,
      autoClose: true,
    };
    const un = {
      offset: '(array|string|function)',
      boundary: '(string|element)',
      reference: '(string|element|object)',
      display: 'string',
      popperConfig: '(null|object|function)',
      autoClose: '(boolean|string)',
    };
    class fn extends dt {
      constructor(e, t) {
        super(e),
        (this._popper = null),
        (this._config = this._getConfig(t)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
      }

      static get Default() {
        return ln;
      }

      static get DefaultType() {
        return un;
      }

      static get NAME() {
        return qt;
      }

      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }

      show() {
        if ($e(this._element) || this._isShown(this._menu)) return;
        const e = { relatedTarget: this._element };
        if (ft.trigger(this._element, 'show.bs.dropdown', e).defaultPrevented) { return; }
        const t = fn.getParentFromElement(this._element);
        this._inNavbar
          ? wt.setDataAttribute(this._menu, 'popper', 'none')
          : this._createPopper(t),
        'ontouchstart' in document.documentElement
              && !t.closest('.navbar-nav')
              && []
                .concat(...document.body.children)
                .forEach((e) => ft.on(e, 'mouseover', Ue)),
        this._element.focus(),
        this._element.setAttribute('aria-expanded', true),
        this._menu.classList.add(Zt),
        this._element.classList.add(Zt),
        ft.trigger(this._element, 'shown.bs.dropdown', e);
      }

      hide() {
        if ($e(this._element) || !this._isShown(this._menu)) return;
        const e = { relatedTarget: this._element };
        this._completeHide(e);
      }

      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }

      update() {
        (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
      }

      _completeHide(e) {
        ft.trigger(this._element, 'hide.bs.dropdown', e).defaultPrevented
            || ('ontouchstart' in document.documentElement
              && []
                .concat(...document.body.children)
                .forEach((e) => ft.off(e, 'mouseover', Ue)),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(Zt),
            this._element.classList.remove(Zt),
            this._element.setAttribute('aria-expanded', 'false'),
            wt.removeDataAttribute(this._menu, 'popper'),
            ft.trigger(this._element, 'hidden.bs.dropdown', e));
      }

      _getConfig(e) {
        if (
          ((e = {
            ...this.constructor.Default,
            ...wt.getDataAttributes(this._element),
            ...e,
          }),
          Ie(qt, e, this.constructor.DefaultType),
          typeof e.reference === 'object'
              && !Ne(e.reference)
              && typeof e.reference.getBoundingClientRect !== 'function')
        ) {
          throw new TypeError(
            `${qt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
          );
        }
        return e;
      }

      _createPopper(t) {
        if (void 0 === e) {
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)",
          );
        }
        let n = this._element;
        this._config.reference === 'parent'
          ? (n = t)
          : Ne(this._config.reference)
            ? (n = Re(this._config.reference))
            : typeof this._config.reference === 'object'
              && (n = this._config.reference);
        const r = this._getPopperConfig();
        const i = r.modifiers.find(
          (e) => e.name === 'applyStyles' && false === e.enabled,
        );
        (this._popper = je(n, this._menu, r)),
        i && wt.setDataAttribute(this._menu, 'popper', 'static');
      }

      _isShown(e = this._element) {
        return e.classList.contains(Zt);
      }

      _getMenuElement() {
        return xt.next(this._element, tn)[0];
      }

      _getPlacement() {
        const e = this._element.parentNode;
        if (e.classList.contains('dropend')) return an;
        if (e.classList.contains('dropstart')) return cn;
        const t = getComputedStyle(this._menu)
          .getPropertyValue('--bs-position')
          .trim() === 'end';
        return e.classList.contains('dropup') ? (t ? rn : nn) : t ? on : sn;
      }

      _detectNavbar() {
        return this._element.closest('.navbar') !== null;
      }

      _getOffset() {
        const { offset: e } = this._config;
        return typeof e === 'string'
          ? e.split(',').map((e) => Number.parseInt(e, 10))
          : typeof e === 'function'
            ? (t) => e(t, this._element)
            : e;
      }

      _getPopperConfig() {
        const e = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: 'preventOverflow',
              options: { boundary: this._config.boundary },
            },
            { name: 'offset', options: { offset: this._getOffset() } },
          ],
        };
        return (
          this._config.display === 'static'
              && (e.modifiers = [{ name: 'applyStyles', enabled: false }]),
          {
            ...e,
            ...(typeof this._config.popperConfig === 'function'
              ? this._config.popperConfig(e)
              : this._config.popperConfig),
          }
        );
      }

      _selectMenuItem({ key: e, target: t }) {
        const n = xt
          .find(
            '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
            this._menu,
          )
          .filter(Me);
        n.length && Ye(n, t, e === Yt, !n.includes(t)).focus();
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = fn.getOrCreateInstance(this, e);
          if (typeof e === 'string') {
            if (void 0 === t[e]) { throw new TypeError(`No method named "${e}"`); }
            t[e]();
          }
        });
      }

      static clearMenus(e) {
        if (e && (e.button === 2 || (e.type === 'keyup' && e.key !== 'Tab'))) { return; }
        const t = xt.find(en);
        for (let n = 0, r = t.length; n < r; n++) {
          const r = fn.getInstance(t[n]);
          if (!r || false === r._config.autoClose) continue;
          if (!r._isShown()) continue;
          const i = { relatedTarget: r._element };
          if (e) {
            const t = e.composedPath();
            const n = t.includes(r._menu);
            if (
              t.includes(r._element)
                || (r._config.autoClose === 'inside' && !n)
                || (r._config.autoClose === 'outside' && n)
            ) { continue; }
            if (
              r._menu.contains(e.target)
                && ((e.type === 'keyup' && e.key === 'Tab')
                  || /input|select|option|textarea|form/i.test(e.target.tagName))
            ) { continue; }
            e.type === 'click' && (i.clickEvent = e);
          }
          r._completeHide(i);
        }
      }

      static getParentFromElement(e) {
        return Le(e) || e.parentNode;
      }

      static dataApiKeydownHandler(e) {
        if (
          /input|textarea/i.test(e.target.tagName)
            ? e.key === Kt
                || (e.key !== Wt
                  && ((e.key !== Yt && e.key !== Jt) || e.target.closest(tn)))
            : !Xt.test(e.key)
        ) { return; }
        const t = this.classList.contains(Zt);
        if (!t && e.key === Wt) return;
        if ((e.preventDefault(), e.stopPropagation(), $e(this))) return;
        const n = this.matches(en) ? this : xt.prev(this, en)[0];
        const r = fn.getOrCreateInstance(n);
        if (e.key !== Wt) {
          return e.key === Jt || e.key === Yt
            ? (t || r.show(), void r._selectMenuItem(e))
            : void ((t && e.key !== Kt) || fn.clearMenus());
        }
        r.hide();
      }
    }
    ft.on(document, Gt, en, fn.dataApiKeydownHandler),
    ft.on(document, Gt, tn, fn.dataApiKeydownHandler),
    ft.on(document, Qt, fn.clearMenus),
    ft.on(document, 'keyup.bs.dropdown.data-api', fn.clearMenus),
    ft.on(document, Qt, en, function (e) {
      e.preventDefault(), fn.getOrCreateInstance(this).toggle();
    }),
    We(fn);
    const hn = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
    const pn = '.sticky-top';
    class dn {
      constructor() {
        this._element = document.body;
      }

      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }

      hide() {
        const e = this.getWidth();
        this._disableOverFlow(),
        this._setElementAttributes(
          this._element,
          'paddingRight',
          (t) => t + e,
        ),
        this._setElementAttributes(hn, 'paddingRight', (t) => t + e),
        this._setElementAttributes(pn, 'marginRight', (t) => t - e);
      }

      _disableOverFlow() {
        this._saveInitialAttribute(this._element, 'overflow'),
        (this._element.style.overflow = 'hidden');
      }

      _setElementAttributes(e, t, n) {
        const r = this.getWidth();
        this._applyManipulationCallback(e, (e) => {
          if (e !== this._element && window.innerWidth > e.clientWidth + r) { return; }
          this._saveInitialAttribute(e, t);
          const i = window.getComputedStyle(e)[t];
          e.style[t] = `${n(Number.parseFloat(i))}px`;
        });
      }

      reset() {
        this._resetElementAttributes(this._element, 'overflow'),
        this._resetElementAttributes(this._element, 'paddingRight'),
        this._resetElementAttributes(hn, 'paddingRight'),
        this._resetElementAttributes(pn, 'marginRight');
      }

      _saveInitialAttribute(e, t) {
        const n = e.style[t];
        n && wt.setDataAttribute(e, t, n);
      }

      _resetElementAttributes(e, t) {
        this._applyManipulationCallback(e, (e) => {
          const n = wt.getDataAttribute(e, t);
          void 0 === n
            ? e.style.removeProperty(t)
            : (wt.removeDataAttribute(e, t), (e.style[t] = n));
        });
      }

      _applyManipulationCallback(e, t) {
        Ne(e) ? t(e) : xt.find(e, this._element).forEach(t);
      }

      isOverflowing() {
        return this.getWidth() > 0;
      }
    }
    const gn = {
      className: 'modal-backdrop',
      isVisible: true,
      isAnimated: false,
      rootElement: 'body',
      clickCallback: null,
    };
    const mn = {
      className: 'string',
      isVisible: 'boolean',
      isAnimated: 'boolean',
      rootElement: '(element|string)',
      clickCallback: '(function|null)',
    };
    const vn = 'show';
    const yn = 'mousedown.bs.backdrop';
    class bn {
      constructor(e) {
        (this._config = this._getConfig(e)),
        (this._isAppended = false),
        (this._element = null);
      }

      show(e) {
        this._config.isVisible
          ? (this._append(),
          this._config.isAnimated && He(this._getElement()),
          this._getElement().classList.add(vn),
          this._emulateAnimation(() => {
            Ke(e);
          }))
          : Ke(e);
      }

      hide(e) {
        this._config.isVisible
          ? (this._getElement().classList.remove(vn),
          this._emulateAnimation(() => {
            this.dispose(), Ke(e);
          }))
          : Ke(e);
      }

      _getElement() {
        if (!this._element) {
          const e = document.createElement('div');
          (e.className = this._config.className),
          this._config.isAnimated && e.classList.add('fade'),
          (this._element = e);
        }
        return this._element;
      }

      _getConfig(e) {
        return (
          ((e = { ...gn, ...(typeof e === 'object' ? e : {}) }).rootElement = Re(e.rootElement)),
          Ie('backdrop', e, mn),
          e
        );
      }

      _append() {
        this._isAppended
            || (this._config.rootElement.append(this._getElement()),
            ft.on(this._getElement(), yn, () => {
              Ke(this._config.clickCallback);
            }),
            (this._isAppended = true));
      }

      dispose() {
        this._isAppended
            && (ft.off(this._element, yn),
            this._element.remove(),
            (this._isAppended = false));
      }

      _emulateAnimation(e) {
        Je(e, this._getElement(), this._config.isAnimated);
      }
    }
    const _n = { trapElement: null, autofocus: true };
    const wn = { trapElement: 'element', autofocus: 'boolean' };
    const xn = '.bs.focustrap';
    const On = 'backward';
    class En {
      constructor(e) {
        (this._config = this._getConfig(e)),
        (this._isActive = false),
        (this._lastTabNavDirection = null);
      }

      activate() {
        const { trapElement: e, autofocus: t } = this._config;
        this._isActive
            || (t && e.focus(),
            ft.off(document, xn),
            ft.on(document, 'focusin.bs.focustrap', (e) => this._handleFocusin(e)),
            ft.on(document, 'keydown.tab.bs.focustrap', (e) => this._handleKeydown(e)),
            (this._isActive = true));
      }

      deactivate() {
        this._isActive && ((this._isActive = false), ft.off(document, xn));
      }

      _handleFocusin(e) {
        const { target: t } = e;
        const { trapElement: n } = this._config;
        if (t === document || t === n || n.contains(t)) return;
        const r = xt.focusableChildren(n);
        r.length === 0
          ? n.focus()
          : this._lastTabNavDirection === On
            ? r[r.length - 1].focus()
            : r[0].focus();
      }

      _handleKeydown(e) {
        e.key === 'Tab'
            && (this._lastTabNavDirection = e.shiftKey ? On : 'forward');
      }

      _getConfig(e) {
        return (
          (e = { ..._n, ...(typeof e === 'object' ? e : {}) }),
          Ie('focustrap', e, wn),
          e
        );
      }
    }
    const kn = 'modal';
    const Sn = 'Escape';
    const Cn = { backdrop: true, keyboard: true, focus: true };
    const jn = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
    };
    const An = 'hidden.bs.modal';
    const Tn = 'show.bs.modal';
    const Pn = 'resize.bs.modal';
    const Fn = 'click.dismiss.bs.modal';
    const Ln = 'keydown.dismiss.bs.modal';
    const Dn = 'mousedown.dismiss.bs.modal';
    const Nn = 'modal-open';
    const Rn = 'show';
    const In = 'modal-static';
    class Mn extends dt {
      constructor(e, t) {
        super(e),
        (this._config = this._getConfig(t)),
        (this._dialog = xt.findOne('.modal-dialog', this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = false),
        (this._ignoreBackdropClick = false),
        (this._isTransitioning = false),
        (this._scrollBar = new dn());
      }

      static get Default() {
        return Cn;
      }

      static get NAME() {
        return kn;
      }

      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }

      show(e) {
        this._isShown
            || this._isTransitioning
            || ft.trigger(this._element, Tn, { relatedTarget: e })
              .defaultPrevented
            || ((this._isShown = true),
            this._isAnimated() && (this._isTransitioning = true),
            this._scrollBar.hide(),
            document.body.classList.add(Nn),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            ft.on(this._dialog, Dn, () => {
              ft.one(this._element, 'mouseup.dismiss.bs.modal', (e) => {
                e.target === this._element && (this._ignoreBackdropClick = true);
              });
            }),
            this._showBackdrop(() => this._showElement(e)));
      }

      hide() {
        if (!this._isShown || this._isTransitioning) return;
        if (ft.trigger(this._element, 'hide.bs.modal').defaultPrevented) { return; }
        this._isShown = false;
        const e = this._isAnimated();
        e && (this._isTransitioning = true),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(Rn),
        ft.off(this._element, Fn),
        ft.off(this._dialog, Dn),
        this._queueCallback(() => this._hideModal(), this._element, e);
      }

      dispose() {
        [window, this._dialog].forEach((e) => ft.off(e, '.bs.modal')),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
      }

      handleUpdate() {
        this._adjustDialog();
      }

      _initializeBackDrop() {
        return new bn({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated(),
        });
      }

      _initializeFocusTrap() {
        return new En({ trapElement: this._element });
      }

      _getConfig(e) {
        return (
          (e = {
            ...Cn,
            ...wt.getDataAttributes(this._element),
            ...(typeof e === 'object' ? e : {}),
          }),
          Ie(kn, e, jn),
          e
        );
      }

      _showElement(e) {
        const t = this._isAnimated();
        const n = xt.findOne('.modal-body', this._dialog);
        (this._element.parentNode
            && this._element.parentNode.nodeType === Node.ELEMENT_NODE)
            || document.body.append(this._element),
        (this._element.style.display = 'block'),
        this._element.removeAttribute('aria-hidden'),
        this._element.setAttribute('aria-modal', true),
        this._element.setAttribute('role', 'dialog'),
        (this._element.scrollTop = 0),
        n && (n.scrollTop = 0),
        t && He(this._element),
        this._element.classList.add(Rn),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
            (this._isTransitioning = false),
            ft.trigger(this._element, 'shown.bs.modal', {
              relatedTarget: e,
            });
          },
          this._dialog,
          t,
        );
      }

      _setEscapeEvent() {
        this._isShown
          ? ft.on(this._element, Ln, (e) => {
            this._config.keyboard && e.key === Sn
              ? (e.preventDefault(), this.hide())
              : this._config.keyboard
                    || e.key !== Sn
                    || this._triggerBackdropTransition();
          })
          : ft.off(this._element, Ln);
      }

      _setResizeEvent() {
        this._isShown
          ? ft.on(window, Pn, () => this._adjustDialog())
          : ft.off(window, Pn);
      }

      _hideModal() {
        (this._element.style.display = 'none'),
        this._element.setAttribute('aria-hidden', true),
        this._element.removeAttribute('aria-modal'),
        this._element.removeAttribute('role'),
        (this._isTransitioning = false),
        this._backdrop.hide(() => {
          document.body.classList.remove(Nn),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          ft.trigger(this._element, An);
        });
      }

      _showBackdrop(e) {
        ft.on(this._element, Fn, (e) => {
          this._ignoreBackdropClick
            ? (this._ignoreBackdropClick = false)
            : e.target === e.currentTarget
                && (true === this._config.backdrop
                  ? this.hide()
                  : this._config.backdrop === 'static'
                    && this._triggerBackdropTransition());
        }),
        this._backdrop.show(e);
      }

      _isAnimated() {
        return this._element.classList.contains('fade');
      }

      _triggerBackdropTransition() {
        if (
          ft.trigger(this._element, 'hidePrevented.bs.modal').defaultPrevented
        ) { return; }
        const { classList: e, scrollHeight: t, style: n } = this._element;
        const r = t > document.documentElement.clientHeight;
        (!r && n.overflowY === 'hidden')
            || e.contains(In)
            || (r || (n.overflowY = 'hidden'),
            e.add(In),
            this._queueCallback(() => {
              e.remove(In),
              r
                  || this._queueCallback(() => {
                    n.overflowY = '';
                  }, this._dialog);
            }, this._dialog),
            this._element.focus());
      }

      _adjustDialog() {
        const e = this._element.scrollHeight > document.documentElement.clientHeight;
        const t = this._scrollBar.getWidth();
        const n = t > 0;
        ((!n && e && !qe()) || (n && !e && qe()))
            && (this._element.style.paddingLeft = `${t}px`),
        ((n && !e && !qe()) || (!n && e && qe()))
              && (this._element.style.paddingRight = `${t}px`);
      }

      _resetAdjustments() {
        (this._element.style.paddingLeft = ''),
        (this._element.style.paddingRight = '');
      }

      static jQueryInterface(e, t) {
        return this.each(function () {
          const n = Mn.getOrCreateInstance(this, e);
          if (typeof e === 'string') {
            if (void 0 === n[e]) { throw new TypeError(`No method named "${e}"`); }
            n[e](t);
          }
        });
      }
    }
    ft.on(
      document,
      'click.bs.modal.data-api',
      '[data-bs-toggle="modal"]',
      function (e) {
        const t = Le(this);
        ['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
        ft.one(t, Tn, (e) => {
          e.defaultPrevented
                || ft.one(t, An, () => {
                  Me(this) && this.focus();
                });
        });
        const n = xt.findOne('.modal.show');
        n && Mn.getInstance(n).hide(), Mn.getOrCreateInstance(t).toggle(this);
      },
    ),
    gt(Mn),
    We(Mn);
    const $n = 'offcanvas';
    const zn = { backdrop: true, keyboard: true, scroll: false };
    const Un = {
      backdrop: 'boolean',
      keyboard: 'boolean',
      scroll: 'boolean',
    };
    const Hn = 'show';
    const Bn = '.offcanvas.show';
    const Vn = 'hidden.bs.offcanvas';
    class qn extends dt {
      constructor(e, t) {
        super(e),
        (this._config = this._getConfig(t)),
        (this._isShown = false),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
      }

      static get NAME() {
        return $n;
      }

      static get Default() {
        return zn;
      }

      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }

      show(e) {
        this._isShown
            || ft.trigger(this._element, 'show.bs.offcanvas', { relatedTarget: e })
              .defaultPrevented
            || ((this._isShown = true),
            (this._element.style.visibility = 'visible'),
            this._backdrop.show(),
            this._config.scroll || new dn().hide(),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', true),
            this._element.setAttribute('role', 'dialog'),
            this._element.classList.add(Hn),
            this._queueCallback(
              () => {
                this._config.scroll || this._focustrap.activate(),
                ft.trigger(this._element, 'shown.bs.offcanvas', {
                  relatedTarget: e,
                });
              },
              this._element,
              true,
            ));
      }

      hide() {
        this._isShown
            && (ft.trigger(this._element, 'hide.bs.offcanvas').defaultPrevented
              || (this._focustrap.deactivate(),
              this._element.blur(),
              (this._isShown = false),
              this._element.classList.remove(Hn),
              this._backdrop.hide(),
              this._queueCallback(
                () => {
                  this._element.setAttribute('aria-hidden', true),
                  this._element.removeAttribute('aria-modal'),
                  this._element.removeAttribute('role'),
                  (this._element.style.visibility = 'hidden'),
                  this._config.scroll || new dn().reset(),
                  ft.trigger(this._element, Vn);
                },
                this._element,
                true,
              )));
      }

      dispose() {
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
      }

      _getConfig(e) {
        return (
          (e = {
            ...zn,
            ...wt.getDataAttributes(this._element),
            ...(typeof e === 'object' ? e : {}),
          }),
          Ie($n, e, Un),
          e
        );
      }

      _initializeBackDrop() {
        return new bn({
          className: 'offcanvas-backdrop',
          isVisible: this._config.backdrop,
          isAnimated: true,
          rootElement: this._element.parentNode,
          clickCallback: () => this.hide(),
        });
      }

      _initializeFocusTrap() {
        return new En({ trapElement: this._element });
      }

      _addEventListeners() {
        ft.on(this._element, 'keydown.dismiss.bs.offcanvas', (e) => {
          this._config.keyboard && e.key === 'Escape' && this.hide();
        });
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = qn.getOrCreateInstance(this, e);
          if (typeof e === 'string') {
            if (void 0 === t[e] || e.startsWith('_') || e === 'constructor') { throw new TypeError(`No method named "${e}"`); }
            t[e](this);
          }
        });
      }
    }
    ft.on(
      document,
      'click.bs.offcanvas.data-api',
      '[data-bs-toggle="offcanvas"]',
      function (e) {
        const t = Le(this);
        if (
          (['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
          $e(this))
        ) { return; }
        ft.one(t, Vn, () => {
          Me(this) && this.focus();
        });
        const n = xt.findOne(Bn);
        n && n !== t && qn.getInstance(n).hide(),
        qn.getOrCreateInstance(t).toggle(this);
      },
    ),
    ft.on(window, 'load.bs.offcanvas.data-api', () => xt.find(Bn).forEach((e) => qn.getOrCreateInstance(e).show())),
    gt(qn),
    We(qn);
    const Wn = new Set([
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href',
    ]);
    const Kn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
    const Jn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    const Yn = (e, t) => {
      const n = e.nodeName.toLowerCase();
      if (t.includes(n)) {
        return (
          !Wn.has(n) || Boolean(Kn.test(e.nodeValue) || Jn.test(e.nodeValue))
        );
      }
      const r = t.filter((e) => e instanceof RegExp);
      for (let e = 0, t = r.length; e < t; e++) if (r[e].test(n)) return true;
      return false;
    };
    function Xn(e, t, n) {
      if (!e.length) return e;
      if (n && typeof n === 'function') return n(e);
      const r = new window.DOMParser().parseFromString(e, 'text/html');
      const i = [].concat(...r.body.querySelectorAll('*'));
      for (let e = 0, n = i.length; e < n; e++) {
        const n = i[e];
        const r = n.nodeName.toLowerCase();
        if (!Object.keys(t).includes(r)) {
          n.remove();
          continue;
        }
        const s = [].concat(...n.attributes);
        const o = [].concat(t['*'] || [], t[r] || []);
        s.forEach((e) => {
          Yn(e, o) || n.removeAttribute(e.nodeName);
        });
      }
      return r.body.innerHTML;
    }
    const Qn = 'tooltip';
    const Gn = new Set(['sanitize', 'allowList', 'sanitizeFn']);
    const Zn = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(array|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacements: 'array',
      boundary: '(string|element)',
      customClass: '(string|function)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      allowList: 'object',
      popperConfig: '(null|object|function)',
    };
    const er = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: qe() ? 'left' : 'right',
      BOTTOM: 'bottom',
      LEFT: qe() ? 'right' : 'left',
    };
    const tr = {
      animation: true,
      template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: [0, 0],
      container: false,
      fallbackPlacements: ['top', 'right', 'bottom', 'left'],
      boundary: 'clippingParents',
      customClass: '',
      sanitize: true,
      sanitizeFn: null,
      allowList: {
        '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
        a: ['target', 'href', 'title', 'rel'],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    };
    const nr = {
      HIDE: 'hide.bs.tooltip',
      HIDDEN: 'hidden.bs.tooltip',
      SHOW: 'show.bs.tooltip',
      SHOWN: 'shown.bs.tooltip',
      INSERTED: 'inserted.bs.tooltip',
      CLICK: 'click.bs.tooltip',
      FOCUSIN: 'focusin.bs.tooltip',
      FOCUSOUT: 'focusout.bs.tooltip',
      MOUSEENTER: 'mouseenter.bs.tooltip',
      MOUSELEAVE: 'mouseleave.bs.tooltip',
    };
    const rr = 'fade';
    const ir = 'show';
    const sr = 'show';
    const or = 'out';
    const ar = '.tooltip-inner';
    const cr = '.modal';
    const lr = 'hide.bs.modal';
    const ur = 'hover';
    const fr = 'focus';
    class hr extends dt {
      constructor(t, n) {
        if (void 0 === e) {
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)",
          );
        }
        super(t),
        (this._isEnabled = true),
        (this._timeout = 0),
        (this._hoverState = ''),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(n)),
        (this.tip = null),
        this._setListeners();
      }

      static get Default() {
        return tr;
      }

      static get NAME() {
        return Qn;
      }

      static get Event() {
        return nr;
      }

      static get DefaultType() {
        return Zn;
      }

      enable() {
        this._isEnabled = true;
      }

      disable() {
        this._isEnabled = false;
      }

      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }

      toggle(e) {
        if (this._isEnabled) {
          if (e) {
            const t = this._initializeOnDelegatedTarget(e);
            (t._activeTrigger.click = !t._activeTrigger.click),
            t._isWithActiveTrigger()
              ? t._enter(null, t)
              : t._leave(null, t);
          } else {
            if (this.getTipElement().classList.contains(ir)) return void this._leave(null, this);
            this._enter(null, this);
          }
        }
      }

      dispose() {
        clearTimeout(this._timeout),
        ft.off(this._element.closest(cr), lr, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
      }

      show() {
        if (this._element.style.display === 'none') { throw new Error('Please use show on visible elements'); }
        if (!this.isWithContent() || !this._isEnabled) return;
        const e = ft.trigger(this._element, this.constructor.Event.SHOW);
        const t = ze(this._element);
        const n = t === null
          ? this._element.ownerDocument.documentElement.contains(
            this._element,
          )
          : t.contains(this._element);
        if (e.defaultPrevented || !n) return;
        this.constructor.NAME === 'tooltip'
            && this.tip
            && this.getTitle() !== this.tip.querySelector(ar).innerHTML
            && (this._disposePopper(), this.tip.remove(), (this.tip = null));
        const r = this.getTipElement();
        const i = ((e) => {
          do {
            e += Math.floor(1e6 * Math.random());
          } while (document.getElementById(e));
          return e;
        })(this.constructor.NAME);
        r.setAttribute('id', i),
        this._element.setAttribute('aria-describedby', i),
        this._config.animation && r.classList.add(rr);
        const s = typeof this._config.placement === 'function'
          ? this._config.placement.call(this, r, this._element)
          : this._config.placement;
        const o = this._getAttachment(s);
        this._addAttachmentClass(o);
        const { container: a } = this._config;
        pt.set(r, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip)
              || (a.append(r),
              ft.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = je(this._element, r, this._getPopperConfig(o))),
        r.classList.add(ir);
        const c = this._resolvePossibleFunction(this._config.customClass);
        c && r.classList.add(...c.split(' ')),
        'ontouchstart' in document.documentElement
              && [].concat(...document.body.children).forEach((e) => {
                ft.on(e, 'mouseover', Ue);
              });
        const l = this.tip.classList.contains(rr);
        this._queueCallback(
          () => {
            const e = this._hoverState;
            (this._hoverState = null),
            ft.trigger(this._element, this.constructor.Event.SHOWN),
            e === or && this._leave(null, this);
          },
          this.tip,
          l,
        );
      }

      hide() {
        if (!this._popper) return;
        const e = this.getTipElement();
        if (
          ft.trigger(this._element, this.constructor.Event.HIDE)
            .defaultPrevented
        ) { return; }
        e.classList.remove(ir),
        'ontouchstart' in document.documentElement
              && []
                .concat(...document.body.children)
                .forEach((e) => ft.off(e, 'mouseover', Ue)),
        (this._activeTrigger.click = false),
        (this._activeTrigger.focus = false),
        (this._activeTrigger.hover = false);
        const t = this.tip.classList.contains(rr);
        this._queueCallback(
          () => {
            this._isWithActiveTrigger()
                || (this._hoverState !== sr && e.remove(),
                this._cleanTipClass(),
                this._element.removeAttribute('aria-describedby'),
                ft.trigger(this._element, this.constructor.Event.HIDDEN),
                this._disposePopper());
          },
          this.tip,
          t,
        ),
        (this._hoverState = '');
      }

      update() {
        this._popper !== null && this._popper.update();
      }

      isWithContent() {
        return Boolean(this.getTitle());
      }

      getTipElement() {
        if (this.tip) return this.tip;
        const e = document.createElement('div');
        e.innerHTML = this._config.template;
        const t = e.children[0];
        return (
          this.setContent(t),
          t.classList.remove(rr, ir),
          (this.tip = t),
          this.tip
        );
      }

      setContent(e) {
        this._sanitizeAndSetContent(e, this.getTitle(), ar);
      }

      _sanitizeAndSetContent(e, t, n) {
        const r = xt.findOne(n, e);
        t || !r ? this.setElementContent(r, t) : r.remove();
      }

      setElementContent(e, t) {
        if (e !== null) {
          return Ne(t)
            ? ((t = Re(t)),
            void (this._config.html
              ? t.parentNode !== e && ((e.innerHTML = ''), e.append(t))
              : (e.textContent = t.textContent)))
            : void (this._config.html
              ? (this._config.sanitize
                      && (t = Xn(
                        t,
                        this._config.allowList,
                        this._config.sanitizeFn,
                      )),
              (e.innerHTML = t))
              : (e.textContent = t));
        }
      }

      getTitle() {
        const e = this._element.getAttribute('data-bs-original-title')
            || this._config.title;
        return this._resolvePossibleFunction(e);
      }

      updateAttachment(e) {
        return e === 'right' ? 'end' : e === 'left' ? 'start' : e;
      }

      _initializeOnDelegatedTarget(e, t) {
        return (
          t
            || this.constructor.getOrCreateInstance(
              e.delegateTarget,
              this._getDelegateConfig(),
            )
        );
      }

      _getOffset() {
        const { offset: e } = this._config;
        return typeof e === 'string'
          ? e.split(',').map((e) => Number.parseInt(e, 10))
          : typeof e === 'function'
            ? (t) => e(t, this._element)
            : e;
      }

      _resolvePossibleFunction(e) {
        return typeof e === 'function' ? e.call(this._element) : e;
      }

      _getPopperConfig(e) {
        const t = {
          placement: e,
          modifiers: [
            {
              name: 'flip',
              options: {
                fallbackPlacements: this._config.fallbackPlacements,
              },
            },
            { name: 'offset', options: { offset: this._getOffset() } },
            {
              name: 'preventOverflow',
              options: { boundary: this._config.boundary },
            },
            {
              name: 'arrow',
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: 'onChange',
              enabled: true,
              phase: 'afterWrite',
              fn: (e) => this._handlePopperPlacementChange(e),
            },
          ],
          onFirstUpdate: (e) => {
            e.options.placement !== e.placement
                && this._handlePopperPlacementChange(e);
          },
        };
        return {
          ...t,
          ...(typeof this._config.popperConfig === 'function'
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        };
      }

      _addAttachmentClass(e) {
        this.getTipElement().classList.add(
          `${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`,
        );
      }

      _getAttachment(e) {
        return er[e.toUpperCase()];
      }

      _setListeners() {
        this._config.trigger.split(' ').forEach((e) => {
          if (e === 'click') {
            ft.on(
              this._element,
              this.constructor.Event.CLICK,
              this._config.selector,
              (e) => this.toggle(e),
            );
          } else if (e !== 'manual') {
            const t = e === ur
              ? this.constructor.Event.MOUSEENTER
              : this.constructor.Event.FOCUSIN;
            const n = e === ur
              ? this.constructor.Event.MOUSELEAVE
              : this.constructor.Event.FOCUSOUT;
            ft.on(this._element, t, this._config.selector, (e) => this._enter(e)),
            ft.on(this._element, n, this._config.selector, (e) => this._leave(e));
          }
        }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        ft.on(this._element.closest(cr), lr, this._hideModalHandler),
        this._config.selector
          ? (this._config = {
            ...this._config,
            trigger: 'manual',
            selector: '',
          })
          : this._fixTitle();
      }

      _fixTitle() {
        const e = this._element.getAttribute('title');
        const t = typeof this._element.getAttribute('data-bs-original-title');
        (e || t !== 'string')
            && (this._element.setAttribute('data-bs-original-title', e || ''),
            !e
              || this._element.getAttribute('aria-label')
              || this._element.textContent
              || this._element.setAttribute('aria-label', e),
            this._element.setAttribute('title', ''));
      }

      _enter(e, t) {
        (t = this._initializeOnDelegatedTarget(e, t)),
        e && (t._activeTrigger[e.type === 'focusin' ? fr : ur] = true),
        t.getTipElement().classList.contains(ir) || t._hoverState === sr
          ? (t._hoverState = sr)
          : (clearTimeout(t._timeout),
          (t._hoverState = sr),
          t._config.delay && t._config.delay.show
            ? (t._timeout = setTimeout(() => {
              t._hoverState === sr && t.show();
            }, t._config.delay.show))
            : t.show());
      }

      _leave(e, t) {
        (t = this._initializeOnDelegatedTarget(e, t)),
        e
              && (t._activeTrigger[e.type === 'focusout' ? fr : ur] = t._element.contains(e.relatedTarget)),
        t._isWithActiveTrigger()
              || (clearTimeout(t._timeout),
              (t._hoverState = or),
              t._config.delay && t._config.delay.hide
                ? (t._timeout = setTimeout(() => {
                  t._hoverState === or && t.hide();
                }, t._config.delay.hide))
                : t.hide());
      }

      _isWithActiveTrigger() {
        for (const e in this._activeTrigger) { if (this._activeTrigger[e]) return true; }
        return false;
      }

      _getConfig(e) {
        const t = wt.getDataAttributes(this._element);
        return (
          Object.keys(t).forEach((e) => {
            Gn.has(e) && delete t[e];
          }),
          ((e = {
            ...this.constructor.Default,
            ...t,
            ...(typeof e === 'object' && e ? e : {}),
          }).container = false === e.container ? document.body : Re(e.container)),
          typeof e.delay === 'number'
              && (e.delay = { show: e.delay, hide: e.delay }),
          typeof e.title === 'number' && (e.title = e.title.toString()),
          typeof e.content === 'number' && (e.content = e.content.toString()),
          Ie(Qn, e, this.constructor.DefaultType),
          e.sanitize
              && (e.template = Xn(e.template, e.allowList, e.sanitizeFn)),
          e
        );
      }

      _getDelegateConfig() {
        const e = {};
        for (const t in this._config) {
          this.constructor.Default[t] !== this._config[t]
              && (e[t] = this._config[t]);
        }
        return e;
      }

      _cleanTipClass() {
        const e = this.getTipElement();
        const t = new RegExp(
          `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
          'g',
        );
        const n = e.getAttribute('class').match(t);
        n !== null
            && n.length > 0
            && n.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
      }

      _getBasicClassPrefix() {
        return 'bs-tooltip';
      }

      _handlePopperPlacementChange(e) {
        const { state: t } = e;
        t
            && ((this.tip = t.elements.popper),
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(t.placement)));
      }

      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null));
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = hr.getOrCreateInstance(this, e);
          if (typeof e === 'string') {
            if (void 0 === t[e]) { throw new TypeError(`No method named "${e}"`); }
            t[e]();
          }
        });
      }
    }
    We(hr);
    const pr = {
      ...hr.Default,
      placement: 'right',
      offset: [0, 8],
      trigger: 'click',
      content: '',
      template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    };
    const dr = { ...hr.DefaultType, content: '(string|element|function)' };
    const gr = {
      HIDE: 'hide.bs.popover',
      HIDDEN: 'hidden.bs.popover',
      SHOW: 'show.bs.popover',
      SHOWN: 'shown.bs.popover',
      INSERTED: 'inserted.bs.popover',
      CLICK: 'click.bs.popover',
      FOCUSIN: 'focusin.bs.popover',
      FOCUSOUT: 'focusout.bs.popover',
      MOUSEENTER: 'mouseenter.bs.popover',
      MOUSELEAVE: 'mouseleave.bs.popover',
    };
    class mr extends hr {
      static get Default() {
        return pr;
      }

      static get NAME() {
        return 'popover';
      }

      static get Event() {
        return gr;
      }

      static get DefaultType() {
        return dr;
      }

      isWithContent() {
        return this.getTitle() || this._getContent();
      }

      setContent(e) {
        this._sanitizeAndSetContent(e, this.getTitle(), '.popover-header'),
        this._sanitizeAndSetContent(e, this._getContent(), '.popover-body');
      }

      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }

      _getBasicClassPrefix() {
        return 'bs-popover';
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = mr.getOrCreateInstance(this, e);
          if (typeof e === 'string') {
            if (void 0 === t[e]) { throw new TypeError(`No method named "${e}"`); }
            t[e]();
          }
        });
      }
    }
    We(mr);
    const vr = 'scrollspy';
    const yr = { offset: 10, method: 'auto', target: '' };
    const br = {
      offset: 'number',
      method: 'string',
      target: '(string|element)',
    };
    const _r = 'active';
    const wr = '.nav-link, .list-group-item, .dropdown-item';
    const xr = 'position';
    class Or extends dt {
      constructor(e, t) {
        super(e),
        (this._scrollElement = this._element.tagName === 'BODY' ? window : this._element),
        (this._config = this._getConfig(t)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        ft.on(this._scrollElement, 'scroll.bs.scrollspy', () => this._process()),
        this.refresh(),
        this._process();
      }

      static get Default() {
        return yr;
      }

      static get NAME() {
        return vr;
      }

      refresh() {
        const e = this._scrollElement === this._scrollElement.window ? 'offset' : xr;
        const t = this._config.method === 'auto' ? e : this._config.method;
        const n = t === xr ? this._getScrollTop() : 0;
        (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        xt
          .find(wr, this._config.target)
          .map((e) => {
            const r = Fe(e);
            const i = r ? xt.findOne(r) : null;
            if (i) {
              const e = i.getBoundingClientRect();
              if (e.width || e.height) return [wt[t](i).top + n, r];
            }
            return null;
          })
          .filter((e) => e)
          .sort((e, t) => e[0] - t[0])
          .forEach((e) => {
            this._offsets.push(e[0]), this._targets.push(e[1]);
          });
      }

      dispose() {
        ft.off(this._scrollElement, '.bs.scrollspy'), super.dispose();
      }

      _getConfig(e) {
        return (
          ((e = {
            ...yr,
            ...wt.getDataAttributes(this._element),
            ...(typeof e === 'object' && e ? e : {}),
          }).target = Re(e.target) || document.documentElement),
          Ie(vr, e, br),
          e
        );
      }

      _getScrollTop() {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      }

      _getScrollHeight() {
        return (
          this._scrollElement.scrollHeight
            || Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
            )
        );
      }

      _getOffsetHeight() {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      }

      _process() {
        const e = this._getScrollTop() + this._config.offset;
        const t = this._getScrollHeight();
        const n = this._config.offset + t - this._getOffsetHeight();
        if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
          const e = this._targets[this._targets.length - 1];
          this._activeTarget !== e && this._activate(e);
        } else {
          if (
            this._activeTarget
              && e < this._offsets[0]
              && this._offsets[0] > 0
          ) { return (this._activeTarget = null), void this._clear(); }
          for (let t = this._offsets.length; t--;) {
            this._activeTarget !== this._targets[t]
                && e >= this._offsets[t]
                && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1])
                && this._activate(this._targets[t]);
          }
        }
      }

      _activate(e) {
        (this._activeTarget = e), this._clear();
        const t = wr
          .split(',')
          .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`);
        const n = xt.findOne(t.join(','), this._config.target);
        n.classList.add(_r),
        n.classList.contains('dropdown-item')
          ? xt
            .findOne('.dropdown-toggle', n.closest('.dropdown'))
            .classList.add(_r)
          : xt.parents(n, '.nav, .list-group').forEach((e) => {
            xt
              .prev(e, '.nav-link, .list-group-item')
              .forEach((e) => e.classList.add(_r)),
            xt.prev(e, '.nav-item').forEach((e) => {
              xt.children(e, '.nav-link').forEach((e) => e.classList.add(_r));
            });
          }),
        ft.trigger(this._scrollElement, 'activate.bs.scrollspy', {
          relatedTarget: e,
        });
      }

      _clear() {
        xt.find(wr, this._config.target)
          .filter((e) => e.classList.contains(_r))
          .forEach((e) => e.classList.remove(_r));
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = Or.getOrCreateInstance(this, e);
          if (typeof e === 'string') {
            if (void 0 === t[e]) { throw new TypeError(`No method named "${e}"`); }
            t[e]();
          }
        });
      }
    }
    ft.on(window, 'load.bs.scrollspy.data-api', () => {
      xt.find('[data-bs-spy="scroll"]').forEach((e) => new Or(e));
    }),
    We(Or);
    const Er = 'active';
    const kr = 'fade';
    const Sr = 'show';
    const Cr = '.active';
    const jr = ':scope > li > .active';
    class Ar extends dt {
      static get NAME() {
        return 'tab';
      }

      show() {
        if (
          this._element.parentNode
            && this._element.parentNode.nodeType === Node.ELEMENT_NODE
            && this._element.classList.contains(Er)
        ) { return; }
        let e;
        const t = Le(this._element);
        const n = this._element.closest('.nav, .list-group');
        if (n) {
          const t = n.nodeName === 'UL' || n.nodeName === 'OL' ? jr : Cr;
          (e = xt.find(t, n)), (e = e[e.length - 1]);
        }
        const r = e
          ? ft.trigger(e, 'hide.bs.tab', { relatedTarget: this._element })
          : null;
        if (
          ft.trigger(this._element, 'show.bs.tab', { relatedTarget: e })
            .defaultPrevented
            || (r !== null && r.defaultPrevented)
        ) { return; }
        this._activate(this._element, n);
        const i = () => {
          ft.trigger(e, 'hidden.bs.tab', { relatedTarget: this._element }),
          ft.trigger(this._element, 'shown.bs.tab', { relatedTarget: e });
        };
        t ? this._activate(t, t.parentNode, i) : i();
      }

      _activate(e, t, n) {
        const r = (
          !t || (t.nodeName !== 'UL' && t.nodeName !== 'OL')
            ? xt.children(t, Cr)
            : xt.find(jr, t)
        )[0];
        const i = n && r && r.classList.contains(kr);
        const s = () => this._transitionComplete(e, r, n);
        r && i
          ? (r.classList.remove(Sr), this._queueCallback(s, e, true))
          : s();
      }

      _transitionComplete(e, t, n) {
        if (t) {
          t.classList.remove(Er);
          const e = xt.findOne(
            ':scope > .dropdown-menu .active',
            t.parentNode,
          );
          e && e.classList.remove(Er),
          t.getAttribute('role') === 'tab'
                && t.setAttribute('aria-selected', false);
        }
        e.classList.add(Er),
        e.getAttribute('role') === 'tab'
              && e.setAttribute('aria-selected', true),
        He(e),
        e.classList.contains(kr) && e.classList.add(Sr);
        let r = e.parentNode;
        if (
          (r && r.nodeName === 'LI' && (r = r.parentNode),
          r && r.classList.contains('dropdown-menu'))
        ) {
          const t = e.closest('.dropdown');
          t
              && xt
                .find('.dropdown-toggle', t)
                .forEach((e) => e.classList.add(Er)),
          e.setAttribute('aria-expanded', true);
        }
        n && n();
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ar.getOrCreateInstance(this);
          if (typeof e === 'string') {
            if (void 0 === t[e]) { throw new TypeError(`No method named "${e}"`); }
            t[e]();
          }
        });
      }
    }
    ft.on(
      document,
      'click.bs.tab.data-api',
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (e) {
        ['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
        $e(this) || Ar.getOrCreateInstance(this).show();
      },
    ),
    We(Ar);
    const Tr = 'toast';
    const Pr = 'hide';
    const Fr = 'show';
    const Lr = 'showing';
    const Dr = { animation: 'boolean', autohide: 'boolean', delay: 'number' };
    const Nr = { animation: true, autohide: true, delay: 5e3 };
    class Rr extends dt {
      constructor(e, t) {
        super(e),
        (this._config = this._getConfig(t)),
        (this._timeout = null),
        (this._hasMouseInteraction = false),
        (this._hasKeyboardInteraction = false),
        this._setListeners();
      }

      static get DefaultType() {
        return Dr;
      }

      static get Default() {
        return Nr;
      }

      static get NAME() {
        return Tr;
      }

      show() {
        ft.trigger(this._element, 'show.bs.toast').defaultPrevented
            || (this._clearTimeout(),
            this._config.animation && this._element.classList.add('fade'),
            this._element.classList.remove(Pr),
            He(this._element),
            this._element.classList.add(Fr),
            this._element.classList.add(Lr),
            this._queueCallback(
              () => {
                this._element.classList.remove(Lr),
                ft.trigger(this._element, 'shown.bs.toast'),
                this._maybeScheduleHide();
              },
              this._element,
              this._config.animation,
            ));
      }

      hide() {
        this._element.classList.contains(Fr)
            && (ft.trigger(this._element, 'hide.bs.toast').defaultPrevented
              || (this._element.classList.add(Lr),
              this._queueCallback(
                () => {
                  this._element.classList.add(Pr),
                  this._element.classList.remove(Lr),
                  this._element.classList.remove(Fr),
                  ft.trigger(this._element, 'hidden.bs.toast');
                },
                this._element,
                this._config.animation,
              )));
      }

      dispose() {
        this._clearTimeout(),
        this._element.classList.contains(Fr)
              && this._element.classList.remove(Fr),
        super.dispose();
      }

      _getConfig(e) {
        return (
          (e = {
            ...Nr,
            ...wt.getDataAttributes(this._element),
            ...(typeof e === 'object' && e ? e : {}),
          }),
          Ie(Tr, e, this.constructor.DefaultType),
          e
        );
      }

      _maybeScheduleHide() {
        this._config.autohide
            && (this._hasMouseInteraction
              || this._hasKeyboardInteraction
              || (this._timeout = setTimeout(() => {
                this.hide();
              }, this._config.delay)));
      }

      _onInteraction(e, t) {
        switch (e.type) {
          case 'mouseover':
          case 'mouseout':
            this._hasMouseInteraction = t;
            break;
          case 'focusin':
          case 'focusout':
            this._hasKeyboardInteraction = t;
        }
        if (t) return void this._clearTimeout();
        const n = e.relatedTarget;
        this._element === n
            || this._element.contains(n)
            || this._maybeScheduleHide();
      }

      _setListeners() {
        ft.on(this._element, 'mouseover.bs.toast', (e) => this._onInteraction(e, true)),
        ft.on(this._element, 'mouseout.bs.toast', (e) => this._onInteraction(e, false)),
        ft.on(this._element, 'focusin.bs.toast', (e) => this._onInteraction(e, true)),
        ft.on(this._element, 'focusout.bs.toast', (e) => this._onInteraction(e, false));
      }

      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = Rr.getOrCreateInstance(this, e);
          if (typeof e === 'string') {
            if (void 0 === t[e]) { throw new TypeError(`No method named "${e}"`); }
            t[e](this);
          }
        });
      }
    }
    let Ir;
    let Mr;
    gt(Rr), We(Rr);
    try {
      Ir = Map;
    } catch (e) {}
    try {
      Mr = Set;
    } catch (e) {}
    function $r(e, t, n) {
      if (!e || typeof e !== 'object' || typeof e === 'function') return e;
      if (e.nodeType && 'cloneNode' in e) return e.cloneNode(true);
      if (e instanceof Date) return new Date(e.getTime());
      if (e instanceof RegExp) return new RegExp(e);
      if (Array.isArray(e)) return e.map(zr);
      if (Ir && e instanceof Ir) return new Map(Array.from(e.entries()));
      if (Mr && e instanceof Mr) return new Set(Array.from(e.values()));
      if (e instanceof Object) {
        t.push(e);
        const r = Object.create(e);
        for (var i in (n.push(r), e)) {
          const s = t.findIndex((t) => t === e[i]);
          r[i] = s > -1 ? n[s] : $r(e[i], t, n);
        }
        return r;
      }
      return e;
    }
    function zr(e) {
      return $r(e, [], []);
    }
    const Ur = Object.prototype.toString;
    const Hr = Error.prototype.toString;
    const Br = RegExp.prototype.toString;
    const Vr = typeof Symbol !== 'undefined' ? Symbol.prototype.toString : () => '';
    const qr = /^Symbol\((.*)\)(.*)$/;
    function Wr(e, t = false) {
      if (e == null || true === e || false === e) return `${e}`;
      const n = typeof e;
      if (n === 'number') {
        return (function (e) {
          return e != +e ? 'NaN' : e === 0 && 1 / e < 0 ? '-0' : `${e}`;
        }(e));
      }
      if (n === 'string') return t ? `"${e}"` : e;
      if (n === 'function') return `[Function ${e.name || 'anonymous'}]`;
      if (n === 'symbol') return Vr.call(e).replace(qr, 'Symbol($1)');
      const r = Ur.call(e).slice(8, -1);
      return r === 'Date'
        ? isNaN(e.getTime())
          ? `${e}`
          : e.toISOString(e)
        : r === 'Error' || e instanceof Error
          ? `[${Hr.call(e)}]`
          : r === 'RegExp'
            ? Br.call(e)
            : null;
    }
    function Kr(e, t) {
      const n = Wr(e, t);
      return n !== null
        ? n
        : JSON.stringify(
          e,
          function (e, n) {
            const r = Wr(this[e], t);
            return r !== null ? r : n;
          },
          2,
        );
    }
    const Jr = {
      default: '${path} is invalid',
      required: '${path} is a required field',
      oneOf: '${path} must be one of the following values: ${values}',
      notOneOf: '${path} must not be one of the following values: ${values}',
      notType: ({
        path: e, type: t, value: n, originalValue: r,
      }) => {
        const i = r != null && r !== n;
        let s = `${e} must be a \`${t}\` type, but the final value was: \`${Kr(
          n,
          true,
        )}\`${i ? ` (cast from the value \`${Kr(r, true)}\`).` : '.'}`;
        return (
          n === null
              && (s
                += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'),
          s
        );
      },
      defined: '${path} must be defined',
    };
    const Yr = {
      length: '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches: '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      uuid: '${path} must be a valid UUID',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
    };
    const Xr = {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    };
    const Qr = Object.assign(Object.create(null), {
      mixed: Jr,
      string: Yr,
      number: {
        min: '${path} must be greater than or equal to ${min}',
        max: '${path} must be less than or equal to ${max}',
        lessThan: '${path} must be less than ${less}',
        moreThan: '${path} must be greater than ${more}',
        positive: '${path} must be a positive number',
        negative: '${path} must be a negative number',
        integer: '${path} must be an integer',
      },
      date: Xr,
      object: { noUnknown: '${path} field has unspecified keys: ${unknown}' },
      array: {
        min: '${path} field must have at least ${min} items',
        max: '${path} field must have less than or equal to ${max} items',
        length: '${path} must have ${length} items',
      },
      boolean: { isValue: '${path} field must be ${value}' },
    });
    const Gr = n(8721);
    const Zr = n.n(Gr);
    function ei(e) {
      return e == null ? [] : [].concat(e);
    }
    function ti() {
      return (
        (ti = Object.assign
            || function (e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n) { Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); }
              }
              return e;
            }),
        ti.apply(this, arguments)
      );
    }
    const ni = /\$\{\s*(\w+)\s*\}/g;
    class ri extends Error {
      static formatError(e, t) {
        const n = t.label || t.path || 'this';
        return (
          n !== t.path && (t = { ...t, path: n }),
          typeof e === 'string'
            ? e.replace(ni, (e, n) => Kr(t[n]))
            : typeof e === 'function'
              ? e(t)
              : e
        );
      }

      static isError(e) {
        return e && e.name === 'ValidationError';
      }

      constructor(e, t, n, r) {
        super(),
        (this.value = void 0),
        (this.path = void 0),
        (this.type = void 0),
        (this.errors = void 0),
        (this.params = void 0),
        (this.inner = void 0),
        (this.name = 'ValidationError'),
        (this.value = t),
        (this.path = n),
        (this.type = r),
        (this.errors = []),
        (this.inner = []),
        ei(e).forEach((e) => {
          ri.isError(e)
            ? (this.errors.push(...e.errors),
            (this.inner = this.inner.concat(
              e.inner.length ? e.inner : e,
            )))
            : this.errors.push(e);
        }),
        (this.message = this.errors.length > 1
          ? `${this.errors.length} errors occurred`
          : this.errors[0]),
        Error.captureStackTrace && Error.captureStackTrace(this, ri);
      }
    }
    function ii(e, t) {
      let {
        endEarly: n,
        tests: r,
        args: i,
        value: s,
        errors: o,
        sort: a,
        path: c,
      } = e;
      const l = ((e) => {
        let t = false;
        return (...n) => {
          t || ((t = true), e(...n));
        };
      })(t);
      let u = r.length;
      const f = [];
      if (((o = o || []), !u)) { return o.length ? l(new ri(o, s, c)) : l(null, s); }
      for (let e = 0; e < r.length; e++) {
        (0, r[e])(i, (e) => {
          if (e) {
            if (!ri.isError(e)) return l(e, s);
            if (n) return (e.value = s), l(e, s);
            f.push(e);
          }
          if (--u <= 0) {
            if (
              (f.length
                  && (a && f.sort(a), o.length && f.push(...o), (o = f)),
              o.length)
            ) return void l(new ri(o, s, c), s);
            l(null, s);
          }
        });
      }
    }
    const si = n(6604);
    const oi = n.n(si);
    const ai = n(5760);
    class ci {
      constructor(e, t = {}) {
        if (
          ((this.key = void 0),
          (this.isContext = void 0),
          (this.isValue = void 0),
          (this.isSibling = void 0),
          (this.path = void 0),
          (this.getter = void 0),
          (this.map = void 0),
          typeof e !== 'string')
        ) { throw new TypeError(`ref must be a string, got: ${e}`); }
        if (((this.key = e.trim()), e === '')) { throw new TypeError('ref must be a non-empty string'); }
        (this.isContext = this.key[0] === '$'),
        (this.isValue = this.key[0] === '.'),
        (this.isSibling = !this.isContext && !this.isValue);
        const n = this.isContext ? '$' : this.isValue ? '.' : '';
        (this.path = this.key.slice(n.length)),
        (this.getter = this.path && (0, ai.getter)(this.path, true)),
        (this.map = t.map);
      }

      getValue(e, t, n) {
        let r = this.isContext ? n : this.isValue ? e : t;
        return (
          this.getter && (r = this.getter(r || {})),
          this.map && (r = this.map(r)),
          r
        );
      }

      cast(e, t) {
        return this.getValue(
          e,
          t == null ? void 0 : t.parent,
          t == null ? void 0 : t.context,
        );
      }

      resolve() {
        return this;
      }

      describe() {
        return { type: 'ref', key: this.key };
      }

      toString() {
        return `Ref(${this.key})`;
      }

      static isRef(e) {
        return e && e.__isYupRef;
      }
    }
    function li() {
      return (
        (li = Object.assign
            || function (e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n) { Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); }
              }
              return e;
            }),
        li.apply(this, arguments)
      );
    }
    function ui(e) {
      function t(t, n) {
        const {
          value: r,
          path: i = '',
          label: s,
          options: o,
          originalValue: a,
          sync: c,
        } = t;
        const l = (function (e, t) {
          if (e == null) return {};
          let n;
          let r;
          const i = {};
          const s = Object.keys(e);
          for (r = 0; r < s.length; r++) { (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]); }
          return i;
        }(t, ['value', 'path', 'label', 'options', 'originalValue', 'sync']));
        const {
          name: u, test: f, params: h, message: p,
        } = e;
        const { parent: d, context: g } = o;
        function m(e) {
          return ci.isRef(e) ? e.getValue(r, d, g) : e;
        }
        function v(e = {}) {
          const t = oi()(
            {
              value: r,
              originalValue: a,
              label: s,
              path: e.path || i,
              ...h,
              ...e.params,
            },
            m,
          );
          const n = new ri(
            ri.formatError(e.message || p, t),
            r,
            t.path,
            e.type || u,
          );
          return (n.params = t), n;
        }
        let y;
        const b = {
          path: i,
          parent: d,
          type: u,
          createError: v,
          resolve: m,
          options: o,
          originalValue: a,
          ...l,
        };
        if (c) {
          try {
            let _;
            if (
              ((y = f.call(b, r, b)),
              typeof ((_ = y) == null ? void 0 : _.then) === 'function')
            ) {
              throw new Error(
                `Validation test of type: "${b.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`,
              );
            }
          } catch (e) {
            return void n(e);
          }
          ri.isError(y) ? n(y) : y ? n(null, y) : n(v());
        } else {
          try {
            Promise.resolve(f.call(b, r, b))
              .then((e) => {
                ri.isError(e) ? n(e) : e ? n(null, e) : n(v());
              })
              .catch(n);
          } catch (e) {
            n(e);
          }
        }
      }
      return (t.OPTIONS = e), t;
    }
    function fi(e, t, n, r = n) {
      let i;
      let s;
      let o;
      return t
        ? ((0, ai.forEach)(t, (a, c, l) => {
          const u = c ? ((e) => e.substr(0, e.length - 1).substr(1))(a) : a;
          if (
            (e = e.resolve({ context: r, parent: i, value: n })).innerType
          ) {
            const r = l ? parseInt(u, 10) : 0;
            if (n && r >= n.length) {
              throw new Error(
                `Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `,
              );
            }
            (i = n), (n = n && n[r]), (e = e.innerType);
          }
          if (!l) {
            if (!e.fields || !e.fields[u]) {
              throw new Error(
                `The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e._type}")`,
              );
            }
            (i = n), (n = n && n[u]), (e = e.fields[u]);
          }
          (s = u), (o = c ? `[${a}]` : `.${a}`);
        }),
        { schema: e, parent: i, parentPath: s })
        : { parent: i, parentPath: t, schema: e };
    }
    ci.prototype.__isYupRef = true;
    class hi {
      constructor() {
        (this.list = void 0),
        (this.refs = void 0),
        (this.list = new Set()),
        (this.refs = new Map());
      }

      get size() {
        return this.list.size + this.refs.size;
      }

      describe() {
        const e = [];
        for (const t of this.list) e.push(t);
        for (const [, t] of this.refs) e.push(t.describe());
        return e;
      }

      toArray() {
        return Array.from(this.list).concat(Array.from(this.refs.values()));
      }

      resolveAll(e) {
        return this.toArray().reduce(
          (t, n) => t.concat(ci.isRef(n) ? e(n) : n),
          [],
        );
      }

      add(e) {
        ci.isRef(e) ? this.refs.set(e.key, e) : this.list.add(e);
      }

      delete(e) {
        ci.isRef(e) ? this.refs.delete(e.key) : this.list.delete(e);
      }

      clone() {
        const e = new hi();
        return (
          (e.list = new Set(this.list)), (e.refs = new Map(this.refs)), e
        );
      }

      merge(e, t) {
        const n = this.clone();
        return (
          e.list.forEach((e) => n.add(e)),
          e.refs.forEach((e) => n.add(e)),
          t.list.forEach((e) => n.delete(e)),
          t.refs.forEach((e) => n.delete(e)),
          n
        );
      }
    }
    function pi() {
      return (
        (pi = Object.assign
            || function (e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n) { Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); }
              }
              return e;
            }),
        pi.apply(this, arguments)
      );
    }
    class di {
      constructor(e) {
        (this.deps = []),
        (this.tests = void 0),
        (this.transforms = void 0),
        (this.conditions = []),
        (this._mutate = void 0),
        (this._typeError = void 0),
        (this._whitelist = new hi()),
        (this._blacklist = new hi()),
        (this.exclusiveTests = Object.create(null)),
        (this.spec = void 0),
        (this.tests = []),
        (this.transforms = []),
        this.withMutation(() => {
          this.typeError(Jr.notType);
        }),
        (this.type = (e == null ? void 0 : e.type) || 'mixed'),
        (this.spec = {
          strip: false,
          strict: false,
          abortEarly: true,
          recursive: true,
          nullable: false,
          presence: 'optional',
          ...(e == null ? void 0 : e.spec),
        });
      }

      get _type() {
        return this.type;
      }

      _typeCheck(e) {
        return true;
      }

      clone(e) {
        if (this._mutate) return e && Object.assign(this.spec, e), this;
        const t = Object.create(Object.getPrototypeOf(this));
        return (
          (t.type = this.type),
          (t._typeError = this._typeError),
          (t._whitelistError = this._whitelistError),
          (t._blacklistError = this._blacklistError),
          (t._whitelist = this._whitelist.clone()),
          (t._blacklist = this._blacklist.clone()),
          (t.exclusiveTests = { ...this.exclusiveTests }),
          (t.deps = [...this.deps]),
          (t.conditions = [...this.conditions]),
          (t.tests = [...this.tests]),
          (t.transforms = [...this.transforms]),
          (t.spec = zr({ ...this.spec, ...e })),
          t
        );
      }

      label(e) {
        const t = this.clone();
        return (t.spec.label = e), t;
      }

      meta(...e) {
        if (e.length === 0) return this.spec.meta;
        const t = this.clone();
        return (t.spec.meta = Object.assign(t.spec.meta || {}, e[0])), t;
      }

      withMutation(e) {
        const t = this._mutate;
        this._mutate = true;
        const n = e(this);
        return (this._mutate = t), n;
      }

      concat(e) {
        if (!e || e === this) return this;
        if (e.type !== this.type && this.type !== 'mixed') {
          throw new TypeError(
            `You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`,
          );
        }
        const t = this;
        const n = e.clone();
        const r = { ...t.spec, ...n.spec };
        return (
          (n.spec = r),
          n._typeError || (n._typeError = t._typeError),
          n._whitelistError || (n._whitelistError = t._whitelistError),
          n._blacklistError || (n._blacklistError = t._blacklistError),
          (n._whitelist = t._whitelist.merge(e._whitelist, e._blacklist)),
          (n._blacklist = t._blacklist.merge(e._blacklist, e._whitelist)),
          (n.tests = t.tests),
          (n.exclusiveTests = t.exclusiveTests),
          n.withMutation((t) => {
            e.tests.forEach((e) => {
              t.test(e.OPTIONS);
            });
          }),
          (n.transforms = [...t.transforms, ...n.transforms]),
          n
        );
      }

      isType(e) {
        return !(!this.spec.nullable || e !== null) || this._typeCheck(e);
      }

      resolve(e) {
        let t = this;
        if (t.conditions.length) {
          const n = t.conditions;
          (t = t.clone()),
          (t.conditions = []),
          (t = n.reduce((t, n) => n.resolve(t, e), t)),
          (t = t.resolve(e));
        }
        return t;
      }

      cast(e, t = {}) {
        const n = this.resolve({ value: e, ...t });
        const r = n._cast(e, t);
        if (void 0 !== e && false !== t.assert && true !== n.isType(r)) {
          const i = Kr(e);
          const s = Kr(r);
          throw new TypeError(
            `The value of ${
              t.path || 'field'
            } could not be cast to a value that satisfies the schema type: "${
              n._type
            }". \n\nattempted value: ${i} \n${
              s !== i ? `result of cast: ${s}` : ''
            }`,
          );
        }
        return r;
      }

      _cast(e, t) {
        let n = void 0 === e
          ? e
          : this.transforms.reduce((t, n) => n.call(this, t, e, this), e);
        return void 0 === n && (n = this.getDefault()), n;
      }

      _validate(e, t = {}, n) {
        const {
          sync: r,
          path: i,
          from: s = [],
          originalValue: o = e,
          strict: a = this.spec.strict,
          abortEarly: c = this.spec.abortEarly,
        } = t;
        let l = e;
        a || (l = this._cast(l, { assert: false, ...t }));
        const u = {
          value: l,
          path: i,
          options: t,
          originalValue: o,
          schema: this,
          label: this.spec.label,
          sync: r,
          from: s,
        };
        const f = [];
        this._typeError && f.push(this._typeError);
        const h = [];
        this._whitelistError && h.push(this._whitelistError),
        this._blacklistError && h.push(this._blacklistError),
        ii(
          {
            args: u,
            value: l,
            path: i,
            sync: r,
            tests: f,
            endEarly: c,
          },
          (e) => {
            e
              ? n(e, l)
              : ii(
                {
                  tests: this.tests.concat(h),
                  args: u,
                  path: i,
                  sync: r,
                  value: l,
                  endEarly: c,
                },
                n,
              );
          },
        );
      }

      validate(e, t, n) {
        const r = this.resolve({ ...t, value: e });
        return typeof n === 'function'
          ? r._validate(e, t, n)
          : new Promise((n, i) => r._validate(e, t, (e, t) => {
            e ? i(e) : n(t);
          }));
      }

      validateSync(e, t) {
        let n;
        return (
          this.resolve({ ...t, value: e })._validate(
            e,
            { ...t, sync: true },
            (e, t) => {
              if (e) throw e;
              n = t;
            },
          ),
          n
        );
      }

      isValid(e, t) {
        return this.validate(e, t).then(
          () => true,
          (e) => {
            if (ri.isError(e)) return false;
            throw e;
          },
        );
      }

      isValidSync(e, t) {
        try {
          return this.validateSync(e, t), true;
        } catch (e) {
          if (ri.isError(e)) return false;
          throw e;
        }
      }

      _getDefault() {
        const e = this.spec.default;
        return e == null ? e : typeof e === 'function' ? e.call(this) : zr(e);
      }

      getDefault(e) {
        return this.resolve(e || {})._getDefault();
      }

      default(e) {
        return arguments.length === 0
          ? this._getDefault()
          : this.clone({ default: e });
      }

      strict(e = true) {
        const t = this.clone();
        return (t.spec.strict = e), t;
      }

      _isPresent(e) {
        return e != null;
      }

      defined(e = Jr.defined) {
        return this.test({
          message: e,
          name: 'defined',
          exclusive: true,
          test: (e) => void 0 !== e,
        });
      }

      required(e = Jr.required) {
        return this.clone({ presence: 'required' }).withMutation((t) => t.test({
          message: e,
          name: 'required',
          exclusive: true,
          test(e) {
            return this.schema._isPresent(e);
          },
        }));
      }

      notRequired() {
        const e = this.clone({ presence: 'optional' });
        return (
          (e.tests = e.tests.filter((e) => e.OPTIONS.name !== 'required')), e
        );
      }

      nullable(e = true) {
        return this.clone({ nullable: false !== e });
      }

      transform(e) {
        const t = this.clone();
        return t.transforms.push(e), t;
      }

      test(...e) {
        let t;
        if (
          ((t = e.length === 1
            ? typeof e[0] === 'function'
              ? { test: e[0] }
              : e[0]
            : e.length === 2
              ? { name: e[0], test: e[1] }
              : { name: e[0], message: e[1], test: e[2] }),
          void 0 === t.message && (t.message = Jr.default),
          typeof t.test !== 'function')
        ) { throw new TypeError('`test` is a required parameters'); }
        const n = this.clone();
        const r = ui(t);
        const i = t.exclusive || (t.name && true === n.exclusiveTests[t.name]);
        if (t.exclusive && !t.name) {
          throw new TypeError(
            'Exclusive tests must provide a unique `name` identifying the test',
          );
        }
        return (
          t.name && (n.exclusiveTests[t.name] = !!t.exclusive),
          (n.tests = n.tests.filter((e) => {
            if (e.OPTIONS.name === t.name) {
              if (i) return false;
              if (e.OPTIONS.test === r.OPTIONS.test) return false;
            }
            return true;
          })),
          n.tests.push(r),
          n
        );
      }

      when(e, t) {
        Array.isArray(e) || typeof e === 'string' || ((t = e), (e = '.'));
        const n = this.clone();
        const r = ei(e).map((e) => new ci(e));
        return (
          r.forEach((e) => {
            e.isSibling && n.deps.push(e.key);
          }),
          n.conditions.push(
            new (class {
              constructor(e, t) {
                if (
                  ((this.fn = void 0),
                  (this.refs = e),
                  (this.refs = e),
                  typeof t === 'function')
                ) { return void (this.fn = t); }
                if (!Zr()(t, 'is')) {
                  throw new TypeError(
                    '`is:` is required for `when()` conditions',
                  );
                }
                if (!t.then && !t.otherwise) {
                  throw new TypeError(
                    'either `then:` or `otherwise:` is required for `when()` conditions',
                  );
                }
                const { is: n, then: r, otherwise: i } = t;
                const s = typeof n === 'function'
                  ? n
                  : (...e) => e.every((e) => e === n);
                this.fn = function (...e) {
                  const t = e.pop();
                  const n = e.pop();
                  const o = s(...e) ? r : i;
                  if (o) {
                    return typeof o === 'function'
                      ? o(n)
                      : n.concat(o.resolve(t));
                  }
                };
              }

              resolve(e, t) {
                const n = this.refs.map((e) => e.getValue(
                  t == null ? void 0 : t.value,
                  t == null ? void 0 : t.parent,
                  t == null ? void 0 : t.context,
                ));
                const r = this.fn.apply(e, n.concat(e, t));
                if (void 0 === r || r === e) return e;
                if (!(i = r) || !i.__isYupSchema__) {
                  throw new TypeError(
                    'conditions must return a schema object',
                  );
                }
                let i;
                return r.resolve(t);
              }
            })(r, t),
          ),
          n
        );
      }

      typeError(e) {
        const t = this.clone();
        return (
          (t._typeError = ui({
            message: e,
            name: 'typeError',
            test(e) {
              return (
                !(void 0 !== e && !this.schema.isType(e))
                  || this.createError({ params: { type: this.schema._type } })
              );
            },
          })),
          t
        );
      }

      oneOf(e, t = Jr.oneOf) {
        const n = this.clone();
        return (
          e.forEach((e) => {
            n._whitelist.add(e), n._blacklist.delete(e);
          }),
          (n._whitelistError = ui({
            message: t,
            name: 'oneOf',
            test(e) {
              if (void 0 === e) return true;
              const t = this.schema._whitelist;
              const n = t.resolveAll(this.resolve);
              return (
                !!n.includes(e)
                  || this.createError({
                    params: { values: t.toArray().join(', '), resolved: n },
                  })
              );
            },
          })),
          n
        );
      }

      notOneOf(e, t = Jr.notOneOf) {
        const n = this.clone();
        return (
          e.forEach((e) => {
            n._blacklist.add(e), n._whitelist.delete(e);
          }),
          (n._blacklistError = ui({
            message: t,
            name: 'notOneOf',
            test(e) {
              const t = this.schema._blacklist;
              const n = t.resolveAll(this.resolve);
              return (
                !n.includes(e)
                  || this.createError({
                    params: { values: t.toArray().join(', '), resolved: n },
                  })
              );
            },
          })),
          n
        );
      }

      strip(e = true) {
        const t = this.clone();
        return (t.spec.strip = e), t;
      }

      describe() {
        const e = this.clone();
        const { label: t, meta: n } = e.spec;
        return {
          meta: n,
          label: t,
          type: e.type,
          oneOf: e._whitelist.describe(),
          notOneOf: e._blacklist.describe(),
          tests: e.tests
            .map((e) => ({ name: e.OPTIONS.name, params: e.OPTIONS.params }))
            .filter((e, t, n) => n.findIndex((t) => t.name === e.name) === t),
        };
      }
    }
    di.prototype.__isYupSchema__ = true;
    for (const e of ['validate', 'validateSync']) {
      di.prototype[`${e}At`] = function (t, n, r = {}) {
        const {
          parent: i,
          parentPath: s,
          schema: o,
        } = fi(this, t, n, r.context);
        return o[e](i && i[s], { ...r, parent: i, path: t });
      };
    }
    for (const e of ['equals', 'is']) di.prototype[e] = di.prototype.oneOf;
    for (const e of ['not', 'nope']) di.prototype[e] = di.prototype.notOneOf;
    di.prototype.optional = di.prototype.notRequired;
    di.prototype;
    const gi = (e) => e == null;
    const mi = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    const vi = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    const yi = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    const bi = (e) => gi(e) || e === e.trim();
    const _i = {}.toString();
    function wi() {
      return new xi();
    }
    class xi extends di {
      constructor() {
        super({ type: 'string' }),
        this.withMutation(() => {
          this.transform(function (e) {
            if (this.isType(e)) return e;
            if (Array.isArray(e)) return e;
            const t = e != null && e.toString ? e.toString() : e;
            return t === _i ? e : t;
          });
        });
      }

      _typeCheck(e) {
        return (
          e instanceof String && (e = e.valueOf()), typeof e === 'string'
        );
      }

      _isPresent(e) {
        return super._isPresent(e) && !!e.length;
      }

      length(e, t = Yr.length) {
        return this.test({
          message: t,
          name: 'length',
          exclusive: true,
          params: { length: e },
          test(t) {
            return gi(t) || t.length === this.resolve(e);
          },
        });
      }

      min(e, t = Yr.min) {
        return this.test({
          message: t,
          name: 'min',
          exclusive: true,
          params: { min: e },
          test(t) {
            return gi(t) || t.length >= this.resolve(e);
          },
        });
      }

      max(e, t = Yr.max) {
        return this.test({
          name: 'max',
          exclusive: true,
          message: t,
          params: { max: e },
          test(t) {
            return gi(t) || t.length <= this.resolve(e);
          },
        });
      }

      matches(e, t) {
        let n;
        let r;
        let i = false;
        return (
          t
              && (typeof t === 'object'
                ? ({ excludeEmptyString: i = false, message: n, name: r } = t)
                : (n = t)),
          this.test({
            name: r || 'matches',
            message: n || Yr.matches,
            params: { regex: e },
            test: (t) => gi(t) || (t === '' && i) || t.search(e) !== -1,
          })
        );
      }

      email(e = Yr.email) {
        return this.matches(mi, {
          name: 'email',
          message: e,
          excludeEmptyString: true,
        });
      }

      url(e = Yr.url) {
        return this.matches(vi, {
          name: 'url',
          message: e,
          excludeEmptyString: true,
        });
      }

      uuid(e = Yr.uuid) {
        return this.matches(yi, {
          name: 'uuid',
          message: e,
          excludeEmptyString: false,
        });
      }

      ensure() {
        return this.default('').transform((e) => (e === null ? '' : e));
      }

      trim(e = Yr.trim) {
        return this.transform((e) => (e != null ? e.trim() : e)).test({
          message: e,
          name: 'trim',
          test: bi,
        });
      }

      lowercase(e = Yr.lowercase) {
        return this.transform((e) => (gi(e) ? e : e.toLowerCase())).test({
          message: e,
          name: 'string_case',
          exclusive: true,
          test: (e) => gi(e) || e === e.toLowerCase(),
        });
      }

      uppercase(e = Yr.uppercase) {
        return this.transform((e) => (gi(e) ? e : e.toUpperCase())).test({
          message: e,
          name: 'string_case',
          exclusive: true,
          test: (e) => gi(e) || e === e.toUpperCase(),
        });
      }
    }
    wi.prototype = xi.prototype;
    const Oi = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
    const Ei = new Date('');
    function ki() {
      return new Si();
    }
    class Si extends di {
      constructor() {
        super({ type: 'date' }),
        this.withMutation(() => {
          this.transform(function (e) {
            return this.isType(e)
              ? e
              : ((e = (function (e) {
                let t;
                let n;
                const r = [1, 4, 5, 6, 7, 10, 11];
                let i = 0;
                if ((n = Oi.exec(e))) {
                  for (var s, o = 0; (s = r[o]); ++o) n[s] = +n[s] || 0;
                  (n[2] = (+n[2] || 1) - 1),
                  (n[3] = +n[3] || 1),
                  (n[7] = n[7] ? String(n[7]).substr(0, 3) : 0),
                  (void 0 !== n[8] && n[8] !== '')
                          || (void 0 !== n[9] && n[9] !== '')
                    ? (n[8] !== 'Z'
                                && void 0 !== n[9]
                                && ((i = 60 * n[10] + n[11]),
                                n[9] === '+' && (i = 0 - i)),
                    (t = Date.UTC(
                      n[1],
                      n[2],
                      n[3],
                      n[4],
                      n[5] + i,
                      n[6],
                      n[7],
                    )))
                    : (t = +new Date(
                      n[1],
                      n[2],
                      n[3],
                      n[4],
                      n[5],
                      n[6],
                      n[7],
                    ));
                } else t = Date.parse ? Date.parse(e) : NaN;
                return t;
              }(e))),
              isNaN(e) ? Ei : new Date(e));
          });
        });
      }

      _typeCheck(e) {
        return (
          (t = e),
          Object.prototype.toString.call(t) === '[object Date]'
              && !isNaN(e.getTime())
        );
        let t;
      }

      prepareParam(e, t) {
        let n;
        if (ci.isRef(e)) n = e;
        else {
          const r = this.cast(e);
          if (!this._typeCheck(r)) {
            throw new TypeError(
              `\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`,
            );
          }
          n = r;
        }
        return n;
      }

      min(e, t = Xr.min) {
        const n = this.prepareParam(e, 'min');
        return this.test({
          message: t,
          name: 'min',
          exclusive: true,
          params: { min: e },
          test(e) {
            return gi(e) || e >= this.resolve(n);
          },
        });
      }

      max(e, t = Xr.max) {
        const n = this.prepareParam(e, 'max');
        return this.test({
          message: t,
          name: 'max',
          exclusive: true,
          params: { max: e },
          test(e) {
            return gi(e) || e <= this.resolve(n);
          },
        });
      }
    }
    (Si.INVALID_DATE = Ei),
    (ki.prototype = Si.prototype),
    (ki.INVALID_DATE = Ei),
    n(1865),
    n(8929),
    n(7523),
    n(4633);
    const axios = n(9669);
    const ji = n(9521);
    const uniqueId = n(3955);
    function Ti(e) {
      return (
        (Ti = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
            return typeof e;
          }
          : function (e) {
            return e
                    && typeof Symbol === 'function'
                    && e.constructor === Symbol
                    && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
        Ti(e)
      );
    }
    function Pi(e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function Fi(e, t) {
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        (r.enumerable = r.enumerable || false),
        (r.configurable = true),
        'value' in r && (r.writable = true),
        Object.defineProperty(e, r.key, r);
      }
    }
    function Li(e, t, n) {
      return (
        t && Fi(e.prototype, t),
        n && Fi(e, n),
        Object.defineProperty(e, 'prototype', { writable: false }),
        e
      );
    }
    function Di(e) {
      if (void 0 === e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return e;
    }
    function Ni(e, t) {
      return (
        (Ni = Object.setPrototypeOf
            || function (e, t) {
              return (e.__proto__ = t), e;
            }),
        Ni(e, t)
      );
    }
    function Ri(e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      }
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: true, configurable: true },
      })),
      Object.defineProperty(e, 'prototype', { writable: false }),
      t && Ni(e, t);
    }
    function Ii(e, t) {
      if (t && (Ti(t) === 'object' || typeof t === 'function')) return t;
      if (void 0 !== t) {
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      }
      return Di(e);
    }
    function Mi(e) {
      return (
        (Mi = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
        Mi(e)
      );
    }
    function $i(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true,
          })
          : (e[t] = n),
        e
      );
    }
    function zi(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function Ui(e, t) {
      const n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        t
            && (r = r.filter(
              (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
            )),
        n.push.apply(n, r);
      }
      return n;
    }
    function Hi(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? Ui(Object(n), true).forEach((t) => {
            $i(e, t, n[t]);
          })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ui(Object(n)).forEach((t) => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
      }
      return e;
    }
    const Bi = {
      type: 'logger',
      log(e) {
        this.output('log', e);
      },
      warn(e) {
        this.output('warn', e);
      },
      error(e) {
        this.output('error', e);
      },
      output(e, t) {
        console && console[e] && console[e].apply(console, t);
      },
    };
    const Vi = new ((function () {
      function e(t) {
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Pi(this, e), this.init(t, n);
      }
      return (
        Li(e, [
          {
            key: 'init',
            value(e) {
              const t = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
              (this.prefix = t.prefix || 'i18next:'),
              (this.logger = e || Bi),
              (this.options = t),
              (this.debug = t.debug);
            },
          },
          {
            key: 'setDebug',
            value(e) {
              this.debug = e;
            },
          },
          {
            key: 'log',
            value() {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              ) { t[n] = arguments[n]; }
              return this.forward(t, 'log', '', true);
            },
          },
          {
            key: 'warn',
            value() {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              ) { t[n] = arguments[n]; }
              return this.forward(t, 'warn', '', true);
            },
          },
          {
            key: 'error',
            value() {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              ) { t[n] = arguments[n]; }
              return this.forward(t, 'error', '');
            },
          },
          {
            key: 'deprecate',
            value() {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              ) { t[n] = arguments[n]; }
              return this.forward(t, 'warn', 'WARNING DEPRECATED: ', true);
            },
          },
          {
            key: 'forward',
            value(e, t, n, r) {
              return r && !this.debug
                ? null
                : (typeof e[0] === 'string'
                      && (e[0] = ''
                        .concat(n)
                        .concat(this.prefix, ' ')
                        .concat(e[0])),
                this.logger[t](e));
            },
          },
          {
            key: 'create',
            value(t) {
              return new e(
                this.logger,
                Hi(
                  Hi(
                    {},
                    { prefix: ''.concat(this.prefix, ':').concat(t, ':') },
                  ),
                  this.options,
                ),
              );
            },
          },
        ]),
        e
      );
    })())();
    const qi = (function () {
      function e() {
        Pi(this, e), (this.observers = {});
      }
      return (
        Li(e, [
          {
            key: 'on',
            value(e, t) {
              const n = this;
              return (
                e.split(' ').forEach((e) => {
                  (n.observers[e] = n.observers[e] || []),
                  n.observers[e].push(t);
                }),
                this
              );
            },
          },
          {
            key: 'off',
            value(e, t) {
              this.observers[e]
                  && (t
                    ? (this.observers[e] = this.observers[e].filter(
                      (e) => e !== t,
                    ))
                    : delete this.observers[e]);
            },
          },
          {
            key: 'emit',
            value(e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              ) { n[r - 1] = arguments[r]; }
              if (this.observers[e]) {
                const i = [].concat(this.observers[e]);
                i.forEach((e) => {
                  e.apply(void 0, n);
                });
              }
              if (this.observers['*']) {
                const s = [].concat(this.observers['*']);
                s.forEach((t) => {
                  t.apply(t, [e].concat(n));
                });
              }
            },
          },
        ]),
        e
      );
    }());
    function Wi() {
      let e;
      let t;
      const n = new Promise((n, r) => {
        (e = n), (t = r);
      });
      return (n.resolve = e), (n.reject = t), n;
    }
    function Ki(e) {
      return e == null ? '' : `${e}`;
    }
    function Ji(e, t, n) {
      e.forEach((e) => {
        t[e] && (n[e] = t[e]);
      });
    }
    function Yi(e, t, n) {
      function r(e) {
        return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e;
      }
      function i() {
        return !e || typeof e === 'string';
      }
      for (
        var s = typeof t !== 'string' ? [].concat(t) : t.split('.');
        s.length > 1;

      ) {
        if (i()) return {};
        const o = r(s.shift());
        !e[o] && n && (e[o] = new n()),
        (e = Object.prototype.hasOwnProperty.call(e, o) ? e[o] : {});
      }
      return i() ? {} : { obj: e, k: r(s.shift()) };
    }
    function Xi(e, t, n) {
      const r = Yi(e, t, Object);
      r.obj[r.k] = n;
    }
    function Qi(e, t) {
      const n = Yi(e, t);
      const r = n.obj;
      const i = n.k;
      if (r) return r[i];
    }
    function Gi(e, t, n) {
      const r = Qi(e, n);
      return void 0 !== r ? r : Qi(t, n);
    }
    function Zi(e, t, n) {
      for (const r in t) {
        r !== '__proto__'
            && r !== 'constructor'
            && (r in e
              ? typeof e[r] === 'string'
                || e[r] instanceof String
                || typeof t[r] === 'string'
                || t[r] instanceof String
                ? n && (e[r] = t[r])
                : Zi(e[r], t[r], n)
              : (e[r] = t[r]));
      }
      return e;
    }
    function es(e) {
      return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
    const ts = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
    };
    function ns(e) {
      return typeof e === 'string'
        ? e.replace(/[&<>"'\/]/g, (e) => ts[e])
        : e;
    }
    const rs = typeof window !== 'undefined'
        && window.navigator
        && window.navigator.userAgent
        && window.navigator.userAgent.indexOf('MSIE') > -1;
    const is = [' ', ',', '?', '!', ';'];
    function ss(e, t) {
      const n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        t
            && (r = r.filter(
              (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
            )),
        n.push.apply(n, r);
      }
      return n;
    }
    function os(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? ss(Object(n), true).forEach((t) => {
            $i(e, t, n[t]);
          })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ss(Object(n)).forEach((t) => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
      }
      return e;
    }
    function as(e, t) {
      const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.';
      if (e) {
        if (e[t]) return e[t];
        for (var r = t.split(n), i = e, s = 0; s < r.length; ++s) {
          if (!i) return;
          if (typeof i[r[s]] === 'string' && s + 1 < r.length) return;
          if (void 0 === i[r[s]]) {
            for (
              var o = 2, a = r.slice(s, s + o).join(n), c = i[a];
              void 0 === c && r.length > s + o;

            ) { o++, (c = i[(a = r.slice(s, s + o).join(n))]); }
            if (void 0 === c) return;
            if (t.endsWith(a)) {
              if (typeof c === 'string') return c;
              if (a && typeof c[a] === 'string') return c[a];
            }
            const l = r.slice(s + o).join(n);
            return l ? as(c, l, n) : void 0;
          }
          i = i[r[s]];
        }
        return i;
      }
    }
    const cs = (function (e) {
      Ri(i, e);
      let t;
      let n;
      const r = ((t = i),
      (n = (function () {
        if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === 'function') return true;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], () => {}),
            ),
            true
          );
        } catch (e) {
          return false;
        }
      }())),
      function () {
        let e;
        const r = Mi(t);
        if (n) {
          const i = Mi(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);
        return Ii(this, e);
      });
      function i(e) {
        let t;
        const n = arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { ns: ['translation'], defaultNS: 'translation' };
        return (
          Pi(this, i),
          (t = r.call(this)),
          rs && qi.call(Di(t)),
          (t.data = e || {}),
          (t.options = n),
          void 0 === t.options.keySeparator && (t.options.keySeparator = '.'),
          void 0 === t.options.ignoreJSONStructure
              && (t.options.ignoreJSONStructure = true),
          t
        );
      }
      return (
        Li(i, [
          {
            key: 'addNamespaces',
            value(e) {
              this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
            },
          },
          {
            key: 'removeNamespaces',
            value(e) {
              const t = this.options.ns.indexOf(e);
              t > -1 && this.options.ns.splice(t, 1);
            },
          },
          {
            key: 'getResource',
            value(e, t, n) {
              const r = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
              const i = void 0 !== r.keySeparator
                ? r.keySeparator
                : this.options.keySeparator;
              const s = void 0 !== r.ignoreJSONStructure
                ? r.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
              let o = [e, t];
              n && typeof n !== 'string' && (o = o.concat(n)),
              n
                    && typeof n === 'string'
                    && (o = o.concat(i ? n.split(i) : n)),
              e.indexOf('.') > -1 && (o = e.split('.'));
              const a = Qi(this.data, o);
              return a || !s || typeof n !== 'string'
                ? a
                : as(this.data && this.data[e] && this.data[e][t], n, i);
            },
          },
          {
            key: 'addResource',
            value(e, t, n, r) {
              const i = arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { silent: false };
              let s = this.options.keySeparator;
              void 0 === s && (s = '.');
              let o = [e, t];
              n && (o = o.concat(s ? n.split(s) : n)),
              e.indexOf('.') > -1 && ((r = t), (t = (o = e.split('.'))[1])),
              this.addNamespaces(t),
              Xi(this.data, o, r),
              i.silent || this.emit('added', e, t, n, r);
            },
          },
          {
            key: 'addResources',
            value(e, t, n) {
              const r = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : { silent: false };
              for (const i in n) {
                (typeof n[i] !== 'string'
                    && Object.prototype.toString.apply(n[i])
                      !== '[object Array]')
                    || this.addResource(e, t, i, n[i], { silent: true });
              }
              r.silent || this.emit('added', e, t, n);
            },
          },
          {
            key: 'addResourceBundle',
            value(e, t, n, r, i) {
              const s = arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: false };
              let o = [e, t];
              e.indexOf('.') > -1
                  && ((r = n), (n = t), (t = (o = e.split('.'))[1])),
              this.addNamespaces(t);
              let a = Qi(this.data, o) || {};
              r ? Zi(a, n, i) : (a = os(os({}, a), n)),
              Xi(this.data, o, a),
              s.silent || this.emit('added', e, t, n);
            },
          },
          {
            key: 'removeResourceBundle',
            value(e, t) {
              this.hasResourceBundle(e, t) && delete this.data[e][t],
              this.removeNamespaces(t),
              this.emit('removed', e, t);
            },
          },
          {
            key: 'hasResourceBundle',
            value(e, t) {
              return void 0 !== this.getResource(e, t);
            },
          },
          {
            key: 'getResourceBundle',
            value(e, t) {
              return (
                t || (t = this.options.defaultNS),
                this.options.compatibilityAPI === 'v1'
                  ? os(os({}, {}), this.getResource(e, t))
                  : this.getResource(e, t)
              );
            },
          },
          {
            key: 'getDataByLanguage',
            value(e) {
              return this.data[e];
            },
          },
          {
            key: 'hasLanguageSomeTranslations',
            value(e) {
              const t = this.getDataByLanguage(e);
              return !!((t && Object.keys(t)) || []).find(
                (e) => t[e] && Object.keys(t[e]).length > 0,
              );
            },
          },
          {
            key: 'toJSON',
            value() {
              return this.data;
            },
          },
        ]),
        i
      );
    }(qi));
    const ls = {
      processors: {},
      addPostProcessor(e) {
        this.processors[e.name] = e;
      },
      handle(e, t, n, r, i) {
        const s = this;
        return (
          e.forEach((e) => {
            s.processors[e] && (t = s.processors[e].process(t, n, r, i));
          }),
          t
        );
      },
    };
    function us(e, t) {
      const n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        t
            && (r = r.filter(
              (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
            )),
        n.push.apply(n, r);
      }
      return n;
    }
    function fs(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? us(Object(n), true).forEach((t) => {
            $i(e, t, n[t]);
          })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : us(Object(n)).forEach((t) => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
      }
      return e;
    }
    const hs = {};
    const ps = (function (e) {
      Ri(i, e);
      let t;
      let n;
      const r = ((t = i),
      (n = (function () {
        if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === 'function') return true;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], () => {}),
            ),
            true
          );
        } catch (e) {
          return false;
        }
      }())),
      function () {
        let e;
        const r = Mi(t);
        if (n) {
          const i = Mi(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);
        return Ii(this, e);
      });
      function i(e) {
        let t;
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          Pi(this, i),
          (t = r.call(this)),
          rs && qi.call(Di(t)),
          Ji(
            [
              'resourceStore',
              'languageUtils',
              'pluralResolver',
              'interpolator',
              'backendConnector',
              'i18nFormat',
              'utils',
            ],
            e,
            Di(t),
          ),
          (t.options = n),
          void 0 === t.options.keySeparator && (t.options.keySeparator = '.'),
          (t.logger = Vi.create('translator')),
          t
        );
      }
      return (
        Li(
          i,
          [
            {
              key: 'changeLanguage',
              value(e) {
                e && (this.language = e);
              },
            },
            {
              key: 'exists',
              value(e) {
                const t = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { interpolation: {} };
                if (e == null) return false;
                const n = this.resolve(e, t);
                return n && void 0 !== n.res;
              },
            },
            {
              key: 'extractFromKey',
              value(e, t) {
                let n = void 0 !== t.nsSeparator
                  ? t.nsSeparator
                  : this.options.nsSeparator;
                void 0 === n && (n = ':');
                const r = void 0 !== t.keySeparator
                  ? t.keySeparator
                  : this.options.keySeparator;
                let i = t.ns || this.options.defaultNS || [];
                const s = n && e.indexOf(n) > -1;
                const o = !(
                  this.options.userDefinedKeySeparator
                    || t.keySeparator
                    || this.options.userDefinedNsSeparator
                    || t.nsSeparator
                    || (function (e, t, n) {
                      (t = t || ''), (n = n || '');
                      const r = is.filter(
                        (e) => t.indexOf(e) < 0 && n.indexOf(e) < 0,
                      );
                      if (r.length === 0) return true;
                      const i = new RegExp(
                        '('.concat(
                          r.map((e) => (e === '?' ? '\\?' : e)).join('|'),
                          ')',
                        ),
                      );
                      let s = !i.test(e);
                      if (!s) {
                        const o = e.indexOf(n);
                        o > 0 && !i.test(e.substring(0, o)) && (s = true);
                      }
                      return s;
                    }(e, n, r))
                );
                if (s && !o) {
                  const a = e.match(this.interpolator.nestingRegexp);
                  if (a && a.length > 0) return { key: e, namespaces: i };
                  const c = e.split(n);
                  (n !== r
                      || (n === r && this.options.ns.indexOf(c[0]) > -1))
                      && (i = c.shift()),
                  (e = c.join(r));
                }
                return (
                  typeof i === 'string' && (i = [i]),
                  { key: e, namespaces: i }
                );
              },
            },
            {
              key: 'translate',
              value(e, t, n) {
                const r = this;
                if (
                  (Ti(t) !== 'object'
                      && this.options.overloadTranslationOptionHandler
                      && (t = this.options.overloadTranslationOptionHandler(
                        arguments,
                      )),
                  t || (t = {}),
                  e == null)
                ) { return ''; }
                Array.isArray(e) || (e = [String(e)]);
                const s = void 0 !== t.keySeparator
                  ? t.keySeparator
                  : this.options.keySeparator;
                const o = this.extractFromKey(e[e.length - 1], t);
                const a = o.key;
                const c = o.namespaces;
                const l = c[c.length - 1];
                const u = t.lng || this.language;
                const f = t.appendNamespaceToCIMode
                    || this.options.appendNamespaceToCIMode;
                if (u && u.toLowerCase() === 'cimode') {
                  if (f) {
                    const h = t.nsSeparator || this.options.nsSeparator;
                    return l + h + a;
                  }
                  return a;
                }
                const p = this.resolve(e, t);
                let d = p && p.res;
                const g = (p && p.usedKey) || a;
                const m = (p && p.exactUsedKey) || a;
                const v = Object.prototype.toString.apply(d);
                const y = [
                  '[object Number]',
                  '[object Function]',
                  '[object RegExp]',
                ];
                const b = void 0 !== t.joinArrays
                  ? t.joinArrays
                  : this.options.joinArrays;
                const _ = !this.i18nFormat || this.i18nFormat.handleAsObject;
                const w = typeof d !== 'string'
                    && typeof d !== 'boolean'
                    && typeof d !== 'number';
                if (
                  _
                    && d
                    && w
                    && y.indexOf(v) < 0
                    && (typeof b !== 'string' || v !== '[object Array]')
                ) {
                  if (!t.returnObjects && !this.options.returnObjects) {
                    return (
                      this.options.returnedObjectHandler
                          || this.logger.warn(
                            'accessing an object - but returnObjects options is not enabled!',
                          ),
                      this.options.returnedObjectHandler
                        ? this.options.returnedObjectHandler(
                          g,
                          d,
                          fs(fs({}, t), {}, { ns: c }),
                        )
                        : "key '"
                          .concat(a, ' (')
                          .concat(
                            this.language,
                            ")' returned an object instead of string.",
                          )
                    );
                  }
                  if (s) {
                    const x = v === '[object Array]';
                    const O = x ? [] : {};
                    const E = x ? m : g;
                    for (const k in d) {
                      if (Object.prototype.hasOwnProperty.call(d, k)) {
                        const S = ''.concat(E).concat(s).concat(k);
                        (O[k] = this.translate(
                          S,
                          fs(fs({}, t), { joinArrays: false, ns: c }),
                        )),
                        O[k] === S && (O[k] = d[k]);
                      }
                    }
                    d = O;
                  }
                } else if (
                  _
                    && typeof b === 'string'
                    && v === '[object Array]'
                ) { (d = d.join(b)) && (d = this.extendTranslation(d, e, t, n)); } else {
                  let C = false;
                  let j = false;
                  const A = void 0 !== t.count && typeof t.count !== 'string';
                  const T = i.hasDefaultValue(t);
                  const P = A
                    ? this.pluralResolver.getSuffix(u, t.count, t)
                    : '';
                  const F = t['defaultValue'.concat(P)] || t.defaultValue;
                  !this.isValidLookup(d) && T && ((C = true), (d = F)),
                  this.isValidLookup(d) || ((j = true), (d = a));
                  const L = t.missingKeyNoValueFallbackToKey
                      || this.options.missingKeyNoValueFallbackToKey;
                  const D = L && j ? void 0 : d;
                  const N = T && F !== d && this.options.updateMissing;
                  if (j || C || N) {
                    if (
                      (this.logger.log(
                        N ? 'updateKey' : 'missingKey',
                        u,
                        l,
                        a,
                        N ? F : d,
                      ),
                      s)
                    ) {
                      const R = this.resolve(
                        a,
                        fs(fs({}, t), {}, { keySeparator: false }),
                      );
                      R
                          && R.res
                          && this.logger.warn(
                            'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                          );
                    }
                    let I = [];
                    const M = this.languageUtils.getFallbackCodes(
                      this.options.fallbackLng,
                      t.lng || this.language,
                    );
                    if (
                      this.options.saveMissingTo === 'fallback'
                        && M
                        && M[0]
                    ) { for (let $ = 0; $ < M.length; $++) I.push(M[$]); } else {
                      this.options.saveMissingTo === 'all'
                        ? (I = this.languageUtils.toResolveHierarchy(
                          t.lng || this.language,
                        ))
                        : I.push(t.lng || this.language);
                    }
                    const z = function (e, n, i) {
                      const s = T && i !== d ? i : D;
                      r.options.missingKeyHandler
                        ? r.options.missingKeyHandler(e, l, n, s, N, t)
                        : r.backendConnector
                            && r.backendConnector.saveMissing
                            && r.backendConnector.saveMissing(e, l, n, s, N, t),
                      r.emit('missingKey', e, l, n, d);
                    };
                    this.options.saveMissing
                        && (this.options.saveMissingPlurals && A
                          ? I.forEach((e) => {
                            r.pluralResolver.getSuffixes(e).forEach((n) => {
                              z([e], a + n, t['defaultValue'.concat(n)] || F);
                            });
                          })
                          : z(I, a, F));
                  }
                  (d = this.extendTranslation(d, e, t, p, n)),
                  j
                        && d === a
                        && this.options.appendNamespaceToMissingKey
                        && (d = ''.concat(l, ':').concat(a)),
                  (j || C)
                        && this.options.parseMissingKeyHandler
                        && (d = this.options.compatibilityAPI !== 'v1'
                          ? this.options.parseMissingKeyHandler(
                            a,
                            C ? d : void 0,
                          )
                          : this.options.parseMissingKeyHandler(d));
                }
                return d;
              },
            },
            {
              key: 'extendTranslation',
              value(e, t, n, r, i) {
                const s = this;
                if (this.i18nFormat && this.i18nFormat.parse) {
                  e = this.i18nFormat.parse(
                    e,
                    n,
                    r.usedLng,
                    r.usedNS,
                    r.usedKey,
                    { resolved: r },
                  );
                } else if (!n.skipInterpolation) {
                  n.interpolation
                      && this.interpolator.init(
                        fs(fs({}, n), {
                          interpolation: fs(
                            fs({}, this.options.interpolation),
                            n.interpolation,
                          ),
                        }),
                      );
                  let o;
                  const a = typeof e === 'string'
                      && (n
                      && n.interpolation
                      && void 0 !== n.interpolation.skipOnVariables
                        ? n.interpolation.skipOnVariables
                        : this.options.interpolation.skipOnVariables);
                  if (a) {
                    const c = e.match(this.interpolator.nestingRegexp);
                    o = c && c.length;
                  }
                  let l = n.replace && typeof n.replace !== 'string'
                    ? n.replace
                    : n;
                  if (
                    (this.options.interpolation.defaultVariables
                        && (l = fs(
                          fs({}, this.options.interpolation.defaultVariables),
                          l,
                        )),
                    (e = this.interpolator.interpolate(
                      e,
                      l,
                      n.lng || this.language,
                      n,
                    )),
                    a)
                  ) {
                    const u = e.match(this.interpolator.nestingRegexp);
                    o < (u && u.length) && (n.nest = false);
                  }
                  false !== n.nest
                      && (e = this.interpolator.nest(
                        e,
                        function () {
                          for (
                            var e = arguments.length, r = new Array(e), o = 0;
                            o < e;
                            o++
                          ) { r[o] = arguments[o]; }
                          return i && i[0] === r[0] && !n.context
                            ? (s.logger.warn(
                              'It seems you are nesting recursively key: '
                                .concat(r[0], ' in key: ')
                                .concat(t[0]),
                            ),
                            null)
                            : s.translate.apply(s, r.concat([t]));
                        },
                        n,
                      )),
                  n.interpolation && this.interpolator.reset();
                }
                const f = n.postProcess || this.options.postProcess;
                const h = typeof f === 'string' ? [f] : f;
                return (
                  e != null
                      && h
                      && h.length
                      && false !== n.applyPostProcessor
                      && (e = ls.handle(
                        h,
                        e,
                        t,
                        this.options && this.options.postProcessPassResolved
                          ? fs({ i18nResolved: r }, n)
                          : n,
                        this,
                      )),
                  e
                );
              },
            },
            {
              key: 'resolve',
              value(e) {
                let t;
                let n;
                let r;
                let i;
                let s;
                const o = this;
                const a = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
                return (
                  typeof e === 'string' && (e = [e]),
                  e.forEach((e) => {
                    if (!o.isValidLookup(t)) {
                      const c = o.extractFromKey(e, a);
                      const l = c.key;
                      n = l;
                      let u = c.namespaces;
                      o.options.fallbackNS
                          && (u = u.concat(o.options.fallbackNS));
                      const f = void 0 !== a.count && typeof a.count !== 'string';
                      const h = f
                          && !a.ordinal
                          && a.count === 0
                          && o.pluralResolver.shouldUseIntlApi();
                      const p = void 0 !== a.context
                          && (typeof a.context === 'string'
                            || typeof a.context === 'number')
                          && a.context !== '';
                      const d = a.lngs
                        ? a.lngs
                        : o.languageUtils.toResolveHierarchy(
                          a.lng || o.language,
                          a.fallbackLng,
                        );
                      u.forEach((e) => {
                        o.isValidLookup(t)
                            || ((s = e),
                            !hs[''.concat(d[0], '-').concat(e)]
                              && o.utils
                              && o.utils.hasLoadedNamespace
                              && !o.utils.hasLoadedNamespace(s)
                              && ((hs[''.concat(d[0], '-').concat(e)] = true),
                              o.logger.warn(
                                'key "'
                                  .concat(n, '" for languages "')
                                  .concat(
                                    d.join(', '),
                                    '" won\'t get resolved as namespace "',
                                  )
                                  .concat(s, '" was not yet loaded'),
                                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                              )),
                            d.forEach((n) => {
                              if (!o.isValidLookup(t)) {
                                i = n;
                                let s;
                                const c = [l];
                                if (o.i18nFormat && o.i18nFormat.addLookupKeys) { o.i18nFormat.addLookupKeys(c, l, n, e, a); } else {
                                  let u;
                                  f
                                    && (u = o.pluralResolver.getSuffix(
                                      n,
                                      a.count,
                                      a,
                                    ));
                                  const d = '_zero';
                                  if (
                                    (f && (c.push(l + u), h && c.push(l + d)),
                                    p)
                                  ) {
                                    const g = ''
                                      .concat(l)
                                      .concat(o.options.contextSeparator)
                                      .concat(a.context);
                                    c.push(g),
                                    f && (c.push(g + u), h && c.push(g + d));
                                  }
                                }
                                for (; (s = c.pop());) {
                                  o.isValidLookup(t)
                                    || ((r = s), (t = o.getResource(n, e, s, a)));
                                }
                              }
                            }));
                      });
                    }
                  }),
                  {
                    res: t,
                    usedKey: n,
                    exactUsedKey: r,
                    usedLng: i,
                    usedNS: s,
                  }
                );
              },
            },
            {
              key: 'isValidLookup',
              value(e) {
                return !(
                  void 0 === e
                    || (!this.options.returnNull && e === null)
                    || (!this.options.returnEmptyString && e === '')
                );
              },
            },
            {
              key: 'getResource',
              value(e, t, n) {
                const r = arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
                return this.i18nFormat && this.i18nFormat.getResource
                  ? this.i18nFormat.getResource(e, t, n, r)
                  : this.resourceStore.getResource(e, t, n, r);
              },
            },
          ],
          [
            {
              key: 'hasDefaultValue',
              value(e) {
                const t = 'defaultValue';
                for (const n in e) {
                  if (
                    Object.prototype.hasOwnProperty.call(e, n)
                      && t === n.substring(0, t.length)
                      && void 0 !== e[n]
                  ) return true;
                }
                return false;
              },
            },
          ],
        ),
        i
      );
    }(qi));
    function ds(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    const gs = (function () {
      function e(t) {
        Pi(this, e),
        (this.options = t),
        (this.supportedLngs = this.options.supportedLngs || false),
        (this.logger = Vi.create('languageUtils'));
      }
      return (
        Li(e, [
          {
            key: 'getScriptPartFromCode',
            value(e) {
              if (!e || e.indexOf('-') < 0) return null;
              const t = e.split('-');
              return t.length === 2
                ? null
                : (t.pop(),
                t[t.length - 1].toLowerCase() === 'x'
                  ? null
                  : this.formatLanguageCode(t.join('-')));
            },
          },
          {
            key: 'getLanguagePartFromCode',
            value(e) {
              if (!e || e.indexOf('-') < 0) return e;
              const t = e.split('-');
              return this.formatLanguageCode(t[0]);
            },
          },
          {
            key: 'formatLanguageCode',
            value(e) {
              if (typeof e === 'string' && e.indexOf('-') > -1) {
                const t = [
                  'hans',
                  'hant',
                  'latn',
                  'cyrl',
                  'cans',
                  'mong',
                  'arab',
                ];
                let n = e.split('-');
                return (
                  this.options.lowerCaseLng
                    ? (n = n.map((e) => e.toLowerCase()))
                    : n.length === 2
                      ? ((n[0] = n[0].toLowerCase()),
                      (n[1] = n[1].toUpperCase()),
                      t.indexOf(n[1].toLowerCase()) > -1
                          && (n[1] = ds(n[1].toLowerCase())))
                      : n.length === 3
                        && ((n[0] = n[0].toLowerCase()),
                        n[1].length === 2 && (n[1] = n[1].toUpperCase()),
                        n[0] !== 'sgn'
                          && n[2].length === 2
                          && (n[2] = n[2].toUpperCase()),
                        t.indexOf(n[1].toLowerCase()) > -1
                          && (n[1] = ds(n[1].toLowerCase())),
                        t.indexOf(n[2].toLowerCase()) > -1
                          && (n[2] = ds(n[2].toLowerCase()))),
                  n.join('-')
                );
              }
              return this.options.cleanCode || this.options.lowerCaseLng
                ? e.toLowerCase()
                : e;
            },
          },
          {
            key: 'isSupportedCode',
            value(e) {
              return (
                (this.options.load === 'languageOnly'
                    || this.options.nonExplicitSupportedLngs)
                    && (e = this.getLanguagePartFromCode(e)),
                !this.supportedLngs
                    || !this.supportedLngs.length
                    || this.supportedLngs.indexOf(e) > -1
              );
            },
          },
          {
            key: 'getBestMatchFromCodes',
            value(e) {
              let t;
              const n = this;
              return e
                ? (e.forEach((e) => {
                  if (!t) {
                    const r = n.formatLanguageCode(e);
                    (n.options.supportedLngs && !n.isSupportedCode(r))
                          || (t = r);
                  }
                }),
                !t
                      && this.options.supportedLngs
                      && e.forEach((e) => {
                        if (!t) {
                          const r = n.getLanguagePartFromCode(e);
                          if (n.isSupportedCode(r)) return (t = r);
                          t = n.options.supportedLngs.find((e) => {
                            if (e.indexOf(r) === 0) return e;
                          });
                        }
                      }),
                t
                      || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                t)
                : null;
            },
          },
          {
            key: 'getFallbackCodes',
            value(e, t) {
              if (!e) return [];
              if (
                (typeof e === 'function' && (e = e(t)),
                typeof e === 'string' && (e = [e]),
                Object.prototype.toString.apply(e) === '[object Array]')
              ) { return e; }
              if (!t) return e.default || [];
              let n = e[t];
              return (
                n || (n = e[this.getScriptPartFromCode(t)]),
                n || (n = e[this.formatLanguageCode(t)]),
                n || (n = e[this.getLanguagePartFromCode(t)]),
                n || (n = e.default),
                n || []
              );
            },
          },
          {
            key: 'toResolveHierarchy',
            value(e, t) {
              const n = this;
              const r = this.getFallbackCodes(
                t || this.options.fallbackLng || [],
                e,
              );
              const i = [];
              const s = function (e) {
                e
                    && (n.isSupportedCode(e)
                      ? i.push(e)
                      : n.logger.warn(
                        'rejecting language code not found in supportedLngs: '.concat(
                          e,
                        ),
                      ));
              };
              return (
                typeof e === 'string' && e.indexOf('-') > -1
                  ? (this.options.load !== 'languageOnly'
                        && s(this.formatLanguageCode(e)),
                  this.options.load !== 'languageOnly'
                        && this.options.load !== 'currentOnly'
                        && s(this.getScriptPartFromCode(e)),
                  this.options.load !== 'currentOnly'
                        && s(this.getLanguagePartFromCode(e)))
                  : typeof e === 'string' && s(this.formatLanguageCode(e)),
                r.forEach((e) => {
                  i.indexOf(e) < 0 && s(n.formatLanguageCode(e));
                }),
                i
              );
            },
          },
        ]),
        e
      );
    }());
    const ms = [
      {
        lngs: [
          'ach',
          'ak',
          'am',
          'arn',
          'br',
          'fil',
          'gun',
          'ln',
          'mfe',
          'mg',
          'mi',
          'oc',
          'pt',
          'pt-BR',
          'tg',
          'tl',
          'ti',
          'tr',
          'uz',
          'wa',
        ],
        nr: [1, 2],
        fc: 1,
      },
      {
        lngs: [
          'af',
          'an',
          'ast',
          'az',
          'bg',
          'bn',
          'ca',
          'da',
          'de',
          'dev',
          'el',
          'en',
          'eo',
          'es',
          'et',
          'eu',
          'fi',
          'fo',
          'fur',
          'fy',
          'gl',
          'gu',
          'ha',
          'hi',
          'hu',
          'hy',
          'ia',
          'it',
          'kk',
          'kn',
          'ku',
          'lb',
          'mai',
          'ml',
          'mn',
          'mr',
          'nah',
          'nap',
          'nb',
          'ne',
          'nl',
          'nn',
          'no',
          'nso',
          'pa',
          'pap',
          'pms',
          'ps',
          'pt-PT',
          'rm',
          'sco',
          'se',
          'si',
          'so',
          'son',
          'sq',
          'sv',
          'sw',
          'ta',
          'te',
          'tk',
          'ur',
          'yo',
        ],
        nr: [1, 2],
        fc: 2,
      },
      {
        lngs: [
          'ay',
          'bo',
          'cgg',
          'fa',
          'ht',
          'id',
          'ja',
          'jbo',
          'ka',
          'km',
          'ko',
          'ky',
          'lo',
          'ms',
          'sah',
          'su',
          'th',
          'tt',
          'ug',
          'vi',
          'wo',
          'zh',
        ],
        nr: [1],
        fc: 3,
      },
      {
        lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
        nr: [1, 2, 5],
        fc: 4,
      },
      { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
      { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
      { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
      { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
      { lngs: ['fr'], nr: [1, 2], fc: 9 },
      { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
      { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
      { lngs: ['is'], nr: [1, 2], fc: 12 },
      { lngs: ['jv'], nr: [0, 1], fc: 13 },
      { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
      { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
      { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
      { lngs: ['mk'], nr: [1, 2], fc: 17 },
      { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
      { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
      { lngs: ['or'], nr: [2, 1], fc: 2 },
      { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
      { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
      { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
    ];
    const vs = {
      1(e) {
        return Number(e > 1);
      },
      2(e) {
        return Number(e != 1);
      },
      3(e) {
        return 0;
      },
      4(e) {
        return Number(
          e % 10 == 1 && e % 100 != 11
            ? 0
            : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
              ? 1
              : 2,
        );
      },
      5(e) {
        return Number(
          e == 0
            ? 0
            : e == 1
              ? 1
              : e == 2
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                  ? 3
                  : e % 100 >= 11
                    ? 4
                    : 5,
        );
      },
      6(e) {
        return Number(e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2);
      },
      7(e) {
        return Number(
          e == 1
            ? 0
            : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
              ? 1
              : 2,
        );
      },
      8(e) {
        return Number(e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3);
      },
      9(e) {
        return Number(e >= 2);
      },
      10(e) {
        return Number(e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
      },
      11(e) {
        return Number(
          e == 1 || e == 11
            ? 0
            : e == 2 || e == 12
              ? 1
              : e > 2 && e < 20
                ? 2
                : 3,
        );
      },
      12(e) {
        return Number(e % 10 != 1 || e % 100 == 11);
      },
      13(e) {
        return Number(e !== 0);
      },
      14(e) {
        return Number(e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3);
      },
      15(e) {
        return Number(
          e % 10 == 1 && e % 100 != 11
            ? 0
            : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
              ? 1
              : 2,
        );
      },
      16(e) {
        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2);
      },
      17(e) {
        return Number(e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
      },
      18(e) {
        return Number(e == 0 ? 0 : e == 1 ? 1 : 2);
      },
      19(e) {
        return Number(
          e == 1
            ? 0
            : e == 0 || (e % 100 > 1 && e % 100 < 11)
              ? 1
              : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3,
        );
      },
      20(e) {
        return Number(
          e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
        );
      },
      21(e) {
        return Number(
          e % 100 == 1
            ? 1
            : e % 100 == 2
              ? 2
              : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0,
        );
      },
      22(e) {
        return Number(
          e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
        );
      },
    };
    const ys = ['v1', 'v2', 'v3'];
    const bs = {
      zero: 0,
      one: 1,
      two: 2,
      few: 3,
      many: 4,
      other: 5,
    };
    function _s() {
      const e = {};
      return (
        ms.forEach((t) => {
          t.lngs.forEach((n) => {
            e[n] = { numbers: t.nr, plurals: vs[t.fc] };
          });
        }),
        e
      );
    }
    const ws = (function () {
      function e(t) {
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Pi(this, e),
        (this.languageUtils = t),
        (this.options = n),
        (this.logger = Vi.create('pluralResolver')),
        (this.options.compatibilityJSON
              && this.options.compatibilityJSON !== 'v4')
              || (typeof Intl !== 'undefined' && Intl.PluralRules)
              || ((this.options.compatibilityJSON = 'v3'),
              this.logger.error(
                'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
              )),
        (this.rules = _s());
      }
      return (
        Li(e, [
          {
            key: 'addRule',
            value(e, t) {
              this.rules[e] = t;
            },
          },
          {
            key: 'getRule',
            value(e) {
              const t = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
              if (this.shouldUseIntlApi()) {
                try {
                  return new Intl.PluralRules(e, {
                    type: t.ordinal ? 'ordinal' : 'cardinal',
                  });
                } catch (e) {
                  return;
                }
              }
              return (
                this.rules[e]
                  || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
              );
            },
          },
          {
            key: 'needsPlural',
            value(e) {
              const t = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
              const n = this.getRule(e, t);
              return this.shouldUseIntlApi()
                ? n && n.resolvedOptions().pluralCategories.length > 1
                : n && n.numbers.length > 1;
            },
          },
          {
            key: 'getPluralFormsOfKey',
            value(e, t) {
              const n = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
              return this.getSuffixes(e, n).map((e) => ''.concat(t).concat(e));
            },
          },
          {
            key: 'getSuffixes',
            value(e) {
              const t = this;
              const n = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
              const r = this.getRule(e, n);
              return r
                ? this.shouldUseIntlApi()
                  ? r
                    .resolvedOptions()
                    .pluralCategories.sort((e, t) => bs[e] - bs[t])
                    .map((e) => ''.concat(t.options.prepend).concat(e))
                  : r.numbers.map((r) => t.getSuffix(e, r, n))
                : [];
            },
          },
          {
            key: 'getSuffix',
            value(e, t) {
              const n = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
              const r = this.getRule(e, n);
              return r
                ? this.shouldUseIntlApi()
                  ? ''.concat(this.options.prepend).concat(r.select(t))
                  : this.getSuffixRetroCompatible(r, t)
                : (this.logger.warn('no plural rule found for: '.concat(e)),
                '');
            },
          },
          {
            key: 'getSuffixRetroCompatible',
            value(e, t) {
              const n = this;
              const r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
              let i = e.numbers[r];
              this.options.simplifyPluralSuffix
                  && e.numbers.length === 2
                  && e.numbers[0] === 1
                  && (i === 2 ? (i = 'plural') : i === 1 && (i = ''));
              const s = function () {
                return n.options.prepend && i.toString()
                  ? n.options.prepend + i.toString()
                  : i.toString();
              };
              return this.options.compatibilityJSON === 'v1'
                ? i === 1
                  ? ''
                  : typeof i === 'number'
                    ? '_plural_'.concat(i.toString())
                    : s()
                : this.options.compatibilityJSON === 'v2'
                    || (this.options.simplifyPluralSuffix
                      && e.numbers.length === 2
                      && e.numbers[0] === 1)
                  ? s()
                  : this.options.prepend && r.toString()
                    ? this.options.prepend + r.toString()
                    : r.toString();
            },
          },
          {
            key: 'shouldUseIntlApi',
            value() {
              return !ys.includes(this.options.compatibilityJSON);
            },
          },
        ]),
        e
      );
    }());
    function xs(e, t) {
      const n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        t
            && (r = r.filter(
              (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
            )),
        n.push.apply(n, r);
      }
      return n;
    }
    function Os(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? xs(Object(n), true).forEach((t) => {
            $i(e, t, n[t]);
          })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : xs(Object(n)).forEach((t) => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
      }
      return e;
    }
    const Es = (function () {
      function e() {
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Pi(this, e),
        (this.logger = Vi.create('interpolator')),
        (this.options = t),
        (this.format = (t.interpolation && t.interpolation.format)
              || function (e) {
                return e;
              }),
        this.init(t);
      }
      return (
        Li(e, [
          {
            key: 'init',
            value() {
              const e = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              e.interpolation || (e.interpolation = { escapeValue: true });
              const t = e.interpolation;
              (this.escape = void 0 !== t.escape ? t.escape : ns),
              (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
              (this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
              (this.prefix = t.prefix
                ? es(t.prefix)
                : t.prefixEscaped || '{{'),
              (this.suffix = t.suffix
                ? es(t.suffix)
                : t.suffixEscaped || '}}'),
              (this.formatSeparator = t.formatSeparator
                ? t.formatSeparator
                : t.formatSeparator || ','),
              (this.unescapePrefix = t.unescapeSuffix
                ? ''
                : t.unescapePrefix || '-'),
              (this.unescapeSuffix = this.unescapePrefix
                ? ''
                : t.unescapeSuffix || ''),
              (this.nestingPrefix = t.nestingPrefix
                ? es(t.nestingPrefix)
                : t.nestingPrefixEscaped || es('$t(')),
              (this.nestingSuffix = t.nestingSuffix
                ? es(t.nestingSuffix)
                : t.nestingSuffixEscaped || es(')')),
              (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                ? t.nestingOptionsSeparator
                : t.nestingOptionsSeparator || ','),
              (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
              (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
              this.resetRegExp();
            },
          },
          {
            key: 'reset',
            value() {
              this.options && this.init(this.options);
            },
          },
          {
            key: 'resetRegExp',
            value() {
              const e = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
              this.regexp = new RegExp(e, 'g');
              const t = ''
                .concat(this.prefix)
                .concat(this.unescapePrefix, '(.+?)')
                .concat(this.unescapeSuffix)
                .concat(this.suffix);
              this.regexpUnescape = new RegExp(t, 'g');
              const n = ''
                .concat(this.nestingPrefix, '(.+?)')
                .concat(this.nestingSuffix);
              this.nestingRegexp = new RegExp(n, 'g');
            },
          },
          {
            key: 'interpolate',
            value(e, t, n, r) {
              let i;
              let s;
              let o;
              const a = this;
              const c = (this.options
                    && this.options.interpolation
                    && this.options.interpolation.defaultVariables)
                  || {};
              function l(e) {
                return e.replace(/\$/g, '$$$$');
              }
              const u = function (e) {
                if (e.indexOf(a.formatSeparator) < 0) {
                  const i = Gi(t, c, e);
                  return a.alwaysFormat
                    ? a.format(
                      i,
                      void 0,
                      n,
                      Os(Os(Os({}, r), t), {}, { interpolationkey: e }),
                    )
                    : i;
                }
                const s = e.split(a.formatSeparator);
                const o = s.shift().trim();
                const l = s.join(a.formatSeparator).trim();
                return a.format(
                  Gi(t, c, o),
                  l,
                  n,
                  Os(Os(Os({}, r), t), {}, { interpolationkey: o }),
                );
              };
              this.resetRegExp();
              const f = (r && r.missingInterpolationHandler)
                  || this.options.missingInterpolationHandler;
              const h = r
                  && r.interpolation
                  && void 0 !== r.interpolation.skipOnVariables
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
              return (
                [
                  {
                    regex: this.regexpUnescape,
                    safeValue(e) {
                      return l(e);
                    },
                  },
                  {
                    regex: this.regexp,
                    safeValue(e) {
                      return a.escapeValue ? l(a.escape(e)) : l(e);
                    },
                  },
                ].forEach((t) => {
                  for (o = 0; (i = t.regex.exec(e));) {
                    const n = i[1].trim();
                    if (void 0 === (s = u(n))) {
                      if (typeof f === 'function') {
                        const c = f(e, i, r);
                        s = typeof c === 'string' ? c : '';
                      } else if (r && r.hasOwnProperty(n)) s = '';
                      else {
                        if (h) {
                          s = i[0];
                          continue;
                        }
                        a.logger.warn(
                          'missed to pass in variable '
                            .concat(n, ' for interpolating ')
                            .concat(e),
                        ),
                        (s = '');
                      }
                    } else {
                      typeof s === 'string'
                          || a.useRawValueToEscape
                          || (s = Ki(s));
                    }
                    const l = t.safeValue(s);
                    if (
                      ((e = e.replace(i[0], l)),
                      h
                        ? ((t.regex.lastIndex += l.length),
                        (t.regex.lastIndex -= i[0].length))
                        : (t.regex.lastIndex = 0),
                      ++o >= a.maxReplaces)
                    ) { break; }
                  }
                }),
                e
              );
            },
          },
          {
            key: 'nest',
            value(e, t) {
              let n;
              let r;
              const i = this;
              const s = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
              let o = Os({}, s);
              function a(e, t) {
                const n = this.nestingOptionsSeparator;
                if (e.indexOf(n) < 0) return e;
                const r = e.split(new RegExp(''.concat(n, '[ ]*{')));
                let i = '{'.concat(r[1]);
                (e = r[0]),
                (i = (i = this.interpolate(i, o)).replace(/'/g, '"'));
                try {
                  (o = JSON.parse(i)), t && (o = Os(Os({}, t), o));
                } catch (t) {
                  return (
                    this.logger.warn(
                      'failed parsing options string in nesting for key '.concat(
                        e,
                      ),
                      t,
                    ),
                    ''.concat(e).concat(n).concat(i)
                  );
                }
                return delete o.defaultValue, e;
              }
              for (
                o.applyPostProcessor = false, delete o.defaultValue;
                (n = this.nestingRegexp.exec(e));

              ) {
                let c = [];
                let l = false;
                if (
                  n[0].indexOf(this.formatSeparator) !== -1
                    && !/{.*}/.test(n[1])
                ) {
                  const u = n[1]
                    .split(this.formatSeparator)
                    .map((e) => e.trim());
                  (n[1] = u.shift()), (c = u), (l = true);
                }
                if (
                  (r = t(a.call(this, n[1].trim(), o), o))
                    && n[0] === e
                    && typeof r !== 'string'
                ) { return r; }
                typeof r !== 'string' && (r = Ki(r)),
                r
                      || (this.logger.warn(
                        'missed to resolve '
                          .concat(n[1], ' for nesting ')
                          .concat(e),
                      ),
                      (r = '')),
                l
                      && (r = c.reduce(
                        (e, t) => i.format(
                          e,
                          t,
                          s.lng,
                          Os(Os({}, s), {}, { interpolationkey: n[1].trim() }),
                        ),
                        r.trim(),
                      )),
                (e = e.replace(n[0], r)),
                (this.regexp.lastIndex = 0);
              }
              return e;
            },
          },
        ]),
        e
      );
    }());
    function ks(e, t) {
      const n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        t
            && (r = r.filter(
              (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
            )),
        n.push.apply(n, r);
      }
      return n;
    }
    function Ss(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? ks(Object(n), true).forEach((t) => {
            $i(e, t, n[t]);
          })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ks(Object(n)).forEach((t) => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
      }
      return e;
    }
    const Cs = (function () {
      function e() {
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Pi(this, e),
        (this.logger = Vi.create('formatter')),
        (this.options = t),
        (this.formats = {
          number(e, t, n) {
            return new Intl.NumberFormat(t, n).format(e);
          },
          currency(e, t, n) {
            return new Intl.NumberFormat(
              t,
              Ss(Ss({}, n), {}, { style: 'currency' }),
            ).format(e);
          },
          datetime(e, t, n) {
            return new Intl.DateTimeFormat(t, Ss({}, n)).format(e);
          },
          relativetime(e, t, n) {
            return new Intl.RelativeTimeFormat(t, Ss({}, n)).format(
              e,
              n.range || 'day',
            );
          },
          list(e, t, n) {
            return new Intl.ListFormat(t, Ss({}, n)).format(e);
          },
        }),
        this.init(t);
      }
      return (
        Li(e, [
          {
            key: 'init',
            value(e) {
              const t = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { interpolation: {} };
              const n = t.interpolation;
              this.formatSeparator = n.formatSeparator
                ? n.formatSeparator
                : n.formatSeparator || ',';
            },
          },
          {
            key: 'add',
            value(e, t) {
              this.formats[e.toLowerCase().trim()] = t;
            },
          },
          {
            key: 'format',
            value(e, t, n, r) {
              const i = this;
              return t.split(this.formatSeparator).reduce((e, t) => {
                const s = (function (e) {
                  let t = e.toLowerCase().trim();
                  const n = {};
                  if (e.indexOf('(') > -1) {
                    const r = e.split('(');
                    t = r[0].toLowerCase().trim();
                    const i = r[1].substring(0, r[1].length - 1);
                    t === 'currency' && i.indexOf(':') < 0
                      ? n.currency || (n.currency = i.trim())
                      : t === 'relativetime' && i.indexOf(':') < 0
                        ? n.range || (n.range = i.trim())
                        : i.split(';').forEach((e) => {
                          if (e) {
                            const t = (function (e) {
                              if (Array.isArray(e)) return e;
                            }((s = e.split(':'))))
                                || (function (e) {
                                  if (
                                    (typeof Symbol !== 'undefined'
                                      && e[Symbol.iterator] != null)
                                    || e['@@iterator'] != null
                                  ) { return Array.from(e); }
                                }(s))
                                || (function (e, t) {
                                  if (e) {
                                    if (typeof e === 'string') return zi(e, t);
                                    let n = Object.prototype.toString
                                      .call(e)
                                      .slice(8, -1);
                                    return (
                                      n === 'Object'
                                        && e.constructor
                                        && (n = e.constructor.name),
                                      n === 'Map' || n === 'Set'
                                        ? Array.from(e)
                                        : n === 'Arguments'
                                          || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                            n,
                                          )
                                          ? zi(e, t)
                                          : void 0
                                    );
                                  }
                                }(s))
                                || (function () {
                                  throw new TypeError(
                                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                  );
                                }());
                            const r = t[0];
                            const i = t.slice(1).join(':');
                            i.trim() === 'false' && (n[r.trim()] = false),
                            i.trim() === 'true' && (n[r.trim()] = true),
                            isNaN(i.trim())
                                  || (n[r.trim()] = parseInt(i.trim(), 10)),
                            n[r.trim()] || (n[r.trim()] = i.trim());
                          }
                          let s;
                        });
                  }
                  return { formatName: t, formatOptions: n };
                }(t));
                const o = s.formatName;
                const a = s.formatOptions;
                if (i.formats[o]) {
                  let c = e;
                  try {
                    const l = (r
                          && r.formatParams
                          && r.formatParams[r.interpolationkey])
                        || {};
                    const u = l.locale || l.lng || r.locale || r.lng || n;
                    c = i.formats[o](e, u, Ss(Ss(Ss({}, a), r), l));
                  } catch (e) {
                    i.logger.warn(e);
                  }
                  return c;
                }
                return (
                  i.logger.warn(
                    'there was no format function for '.concat(o),
                  ),
                  e
                );
              }, e);
            },
          },
        ]),
        e
      );
    }());
    function js(e, t) {
      const n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        t
            && (r = r.filter(
              (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
            )),
        n.push.apply(n, r);
      }
      return n;
    }
    function As(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? js(Object(n), true).forEach((t) => {
            $i(e, t, n[t]);
          })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : js(Object(n)).forEach((t) => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
      }
      return e;
    }
    const Ts = (function (e) {
      Ri(i, e);
      let t;
      let n;
      const r = ((t = i),
      (n = (function () {
        if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === 'function') return true;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], () => {}),
            ),
            true
          );
        } catch (e) {
          return false;
        }
      }())),
      function () {
        let e;
        const r = Mi(t);
        if (n) {
          const i = Mi(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);
        return Ii(this, e);
      });
      function i(e, t, n) {
        let s;
        const o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          Pi(this, i),
          (s = r.call(this)),
          rs && qi.call(Di(s)),
          (s.backend = e),
          (s.store = t),
          (s.services = n),
          (s.languageUtils = n.languageUtils),
          (s.options = o),
          (s.logger = Vi.create('backendConnector')),
          (s.state = {}),
          (s.queue = []),
          s.backend && s.backend.init && s.backend.init(n, o.backend, o),
          s
        );
      }
      return (
        Li(i, [
          {
            key: 'queueLoad',
            value(e, t, n, r) {
              const i = this;
              const s = [];
              const o = [];
              const a = [];
              const c = [];
              return (
                e.forEach((e) => {
                  let r = true;
                  t.forEach((t) => {
                    const a = ''.concat(e, '|').concat(t);
                    !n.reload && i.store.hasResourceBundle(e, t)
                      ? (i.state[a] = 2)
                      : i.state[a] < 0
                          || (i.state[a] === 1
                            ? o.indexOf(a) < 0 && o.push(a)
                            : ((i.state[a] = 1),
                            (r = false),
                            o.indexOf(a) < 0 && o.push(a),
                            s.indexOf(a) < 0 && s.push(a),
                            c.indexOf(t) < 0 && c.push(t)));
                  }),
                  r || a.push(e);
                }),
                (s.length || o.length)
                    && this.queue.push({
                      pending: o,
                      loaded: {},
                      errors: [],
                      callback: r,
                    }),
                {
                  toLoad: s,
                  pending: o,
                  toLoadLanguages: a,
                  toLoadNamespaces: c,
                }
              );
            },
          },
          {
            key: 'loaded',
            value(e, t, n) {
              const r = e.split('|');
              const i = r[0];
              const s = r[1];
              t && this.emit('failedLoading', i, s, t),
              n && this.store.addResourceBundle(i, s, n),
              (this.state[e] = t ? -1 : 2);
              const o = {};
              this.queue.forEach((n) => {
                !(function (e, t, n, r) {
                  const i = Yi(e, t, Object);
                  const s = i.obj;
                  const o = i.k;
                  (s[o] = s[o] || []), s[o].push(n);
                }(n.loaded, [i], s)),
                (function (e, t) {
                  for (let n = e.indexOf(t); n !== -1;) { e.splice(n, 1), (n = e.indexOf(t)); }
                }(n.pending, e)),
                t && n.errors.push(t),
                n.pending.length !== 0
                      || n.done
                      || (Object.keys(n.loaded).forEach((e) => {
                        o[e] || (o[e] = []),
                        n.loaded[e].length
                            && n.loaded[e].forEach((t) => {
                              o[e].indexOf(t) < 0 && o[e].push(t);
                            });
                      }),
                      (n.done = true),
                      n.errors.length ? n.callback(n.errors) : n.callback());
              }),
              this.emit('loaded', o),
              (this.queue = this.queue.filter((e) => !e.done));
            },
          },
          {
            key: 'read',
            value(e, t, n) {
              const r = this;
              const i = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0;
              const s = arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 350;
              const o = arguments.length > 5 ? arguments[5] : void 0;
              return e.length
                ? this.backend[n](e, t, (a, c) => {
                  a && c && i < 5
                    ? setTimeout(() => {
                      r.read.call(r, e, t, n, i + 1, 2 * s, o);
                    }, s)
                    : o(a, c);
                })
                : o(null, {});
            },
          },
          {
            key: 'prepareLoading',
            value(e, t) {
              const n = this;
              const r = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
              const i = arguments.length > 3 ? arguments[3] : void 0;
              if (!this.backend) {
                return (
                  this.logger.warn(
                    'No backend was added via i18next.use. Will not load resources.',
                  ),
                  i && i()
                );
              }
              typeof e === 'string'
                  && (e = this.languageUtils.toResolveHierarchy(e)),
              typeof t === 'string' && (t = [t]);
              const s = this.queueLoad(e, t, r, i);
              if (!s.toLoad.length) return s.pending.length || i(), null;
              s.toLoad.forEach((e) => {
                n.loadOne(e);
              });
            },
          },
          {
            key: 'load',
            value(e, t, n) {
              this.prepareLoading(e, t, {}, n);
            },
          },
          {
            key: 'reload',
            value(e, t, n) {
              this.prepareLoading(e, t, { reload: true }, n);
            },
          },
          {
            key: 'loadOne',
            value(e) {
              const t = this;
              const n = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '';
              const r = e.split('|');
              const i = r[0];
              const s = r[1];
              this.read(i, s, 'read', void 0, void 0, (r, o) => {
                r
                    && t.logger.warn(
                      ''
                        .concat(n, 'loading namespace ')
                        .concat(s, ' for language ')
                        .concat(i, ' failed'),
                      r,
                    ),
                !r
                      && o
                      && t.logger.log(
                        ''
                          .concat(n, 'loaded namespace ')
                          .concat(s, ' for language ')
                          .concat(i),
                        o,
                      ),
                t.loaded(e, r, o);
              });
            },
          },
          {
            key: 'saveMissing',
            value(e, t, n, r, i) {
              const s = arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {};
              this.services.utils
                && this.services.utils.hasLoadedNamespace
                && !this.services.utils.hasLoadedNamespace(t)
                ? this.logger.warn(
                  'did not save key "'
                    .concat(n, '" as the namespace "')
                    .concat(t, '" was not yet loaded'),
                  'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                )
                : n != null
                    && n !== ''
                    && (this.backend
                      && this.backend.create
                      && this.backend.create(
                        e,
                        t,
                        n,
                        r,
                        null,
                        As(As({}, s), {}, { isUpdate: i }),
                      ),
                    e && e[0] && this.store.addResource(e[0], t, n, r));
            },
          },
        ]),
        i
      );
    }(qi));
    function Ps() {
      return {
        debug: false,
        initImmediate: true,
        ns: ['translation'],
        defaultNS: ['translation'],
        fallbackLng: ['dev'],
        fallbackNS: false,
        supportedLngs: false,
        nonExplicitSupportedLngs: false,
        load: 'all',
        preload: false,
        simplifyPluralSuffix: true,
        keySeparator: '.',
        nsSeparator: ':',
        pluralSeparator: '_',
        contextSeparator: '_',
        partialBundledLanguages: false,
        saveMissing: false,
        updateMissing: false,
        saveMissingTo: 'fallback',
        saveMissingPlurals: true,
        missingKeyHandler: false,
        missingInterpolationHandler: false,
        postProcess: false,
        postProcessPassResolved: false,
        returnNull: true,
        returnEmptyString: true,
        returnObjects: false,
        joinArrays: false,
        returnedObjectHandler: false,
        parseMissingKeyHandler: false,
        appendNamespaceToMissingKey: false,
        appendNamespaceToCIMode: false,
        overloadTranslationOptionHandler(e) {
          let t = {};
          if (
            (Ti(e[1]) === 'object' && (t = e[1]),
            typeof e[1] === 'string' && (t.defaultValue = e[1]),
            typeof e[2] === 'string' && (t.tDescription = e[2]),
            Ti(e[2]) === 'object' || Ti(e[3]) === 'object')
          ) {
            const n = e[3] || e[2];
            Object.keys(n).forEach((e) => {
              t[e] = n[e];
            });
          }
          return t;
        },
        interpolation: {
          escapeValue: true,
          format(e, t, n, r) {
            return e;
          },
          prefix: '{{',
          suffix: '}}',
          formatSeparator: ',',
          unescapePrefix: '-',
          nestingPrefix: '$t(',
          nestingSuffix: ')',
          nestingOptionsSeparator: ',',
          maxReplaces: 1e3,
          skipOnVariables: true,
        },
      };
    }
    function Fs(e) {
      return (
        typeof e.ns === 'string' && (e.ns = [e.ns]),
        typeof e.fallbackLng === 'string'
            && (e.fallbackLng = [e.fallbackLng]),
        typeof e.fallbackNS === 'string' && (e.fallbackNS = [e.fallbackNS]),
        e.supportedLngs
            && e.supportedLngs.indexOf('cimode') < 0
            && (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
        e
      );
    }
    function Ls(e, t) {
      const n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        t
            && (r = r.filter(
              (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
            )),
        n.push.apply(n, r);
      }
      return n;
    }
    function Ds(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? Ls(Object(n), true).forEach((t) => {
            $i(e, t, n[t]);
          })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ls(Object(n)).forEach((t) => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
      }
      return e;
    }
    function Ns() {}
    function Rs(e) {
      Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
        typeof e[t] === 'function' && (e[t] = e[t].bind(e));
      });
    }
    const Is = (function (e) {
      Ri(i, e);
      let t;
      let n;
      const r = ((t = i),
      (n = (function () {
        if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === 'function') return true;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], () => {}),
            ),
            true
          );
        } catch (e) {
          return false;
        }
      }())),
      function () {
        let e;
        const r = Mi(t);
        if (n) {
          const i = Mi(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);
        return Ii(this, e);
      });
      function i() {
        let e;
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const n = arguments.length > 1 ? arguments[1] : void 0;
        if (
          (Pi(this, i),
          (e = r.call(this)),
          rs && qi.call(Di(e)),
          (e.options = Fs(t)),
          (e.services = {}),
          (e.logger = Vi),
          (e.modules = { external: [] }),
          Rs(Di(e)),
          n && !e.isInitialized && !t.isClone)
        ) {
          if (!e.options.initImmediate) return e.init(t, n), Ii(e, Di(e));
          setTimeout(() => {
            e.init(t, n);
          }, 0);
        }
        return e;
      }
      return (
        Li(i, [
          {
            key: 'init',
            value() {
              const e = this;
              let t = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              let n = arguments.length > 1 ? arguments[1] : void 0;
              typeof t === 'function' && ((n = t), (t = {})),
              !t.defaultNS
                    && t.ns
                    && (typeof t.ns === 'string'
                      ? (t.defaultNS = t.ns)
                      : t.ns.indexOf('translation') < 0
                        && (t.defaultNS = t.ns[0]));
              const r = Ps();
              function i(e) {
                return e ? (typeof e === 'function' ? new e() : e) : null;
              }
              if (
                ((this.options = Ds(Ds(Ds({}, r), this.options), Fs(t))),
                this.options.compatibilityAPI !== 'v1'
                    && (this.options.interpolation = Ds(
                      Ds({}, r.interpolation),
                      this.options.interpolation,
                    )),
                void 0 !== t.keySeparator
                    && (this.options.userDefinedKeySeparator = t.keySeparator),
                void 0 !== t.nsSeparator
                    && (this.options.userDefinedNsSeparator = t.nsSeparator),
                !this.options.isClone)
              ) {
                let s;
                this.modules.logger
                  ? Vi.init(i(this.modules.logger), this.options)
                  : Vi.init(null, this.options),
                this.modules.formatter
                  ? (s = this.modules.formatter)
                  : typeof Intl !== 'undefined' && (s = Cs);
                const o = new gs(this.options);
                this.store = new cs(this.options.resources, this.options);
                const a = this.services;
                (a.logger = Vi),
                (a.resourceStore = this.store),
                (a.languageUtils = o),
                (a.pluralResolver = new ws(o, {
                  prepend: this.options.pluralSeparator,
                  compatibilityJSON: this.options.compatibilityJSON,
                  simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                })),
                !s
                      || (this.options.interpolation.format
                        && this.options.interpolation.format
                          !== r.interpolation.format)
                      || ((a.formatter = i(s)),
                      a.formatter.init(a, this.options),
                      (this.options.interpolation.format = a.formatter.format.bind(a.formatter))),
                (a.interpolator = new Es(this.options)),
                (a.utils = {
                  hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                }),
                (a.backendConnector = new Ts(
                  i(this.modules.backend),
                  a.resourceStore,
                  a,
                  this.options,
                )),
                a.backendConnector.on('*', function (t) {
                  for (
                    var n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      i = 1;
                    i < n;
                    i++
                  ) { r[i - 1] = arguments[i]; }
                  e.emit.apply(e, [t].concat(r));
                }),
                this.modules.languageDetector
                      && ((a.languageDetector = i(this.modules.languageDetector)),
                      a.languageDetector.init(
                        a,
                        this.options.detection,
                        this.options,
                      )),
                this.modules.i18nFormat
                      && ((a.i18nFormat = i(this.modules.i18nFormat)),
                      a.i18nFormat.init && a.i18nFormat.init(this)),
                (this.translator = new ps(this.services, this.options)),
                this.translator.on('*', function (t) {
                  for (
                    var n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      i = 1;
                    i < n;
                    i++
                  ) { r[i - 1] = arguments[i]; }
                  e.emit.apply(e, [t].concat(r));
                }),
                this.modules.external.forEach((t) => {
                  t.init && t.init(e);
                });
              }
              if (
                ((this.format = this.options.interpolation.format),
                n || (n = Ns),
                this.options.fallbackLng
                    && !this.services.languageDetector
                    && !this.options.lng)
              ) {
                const c = this.services.languageUtils.getFallbackCodes(
                  this.options.fallbackLng,
                );
                c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0]);
              }
              this.services.languageDetector
                  || this.options.lng
                  || this.logger.warn(
                    'init: no languageDetector is used and no lng is defined',
                  );
              const l = [
                'getResource',
                'hasResourceBundle',
                'getResourceBundle',
                'getDataByLanguage',
              ];
              l.forEach((t) => {
                e[t] = function () {
                  let n;
                  return (n = e.store)[t].apply(n, arguments);
                };
              });
              const u = [
                'addResource',
                'addResources',
                'addResourceBundle',
                'removeResourceBundle',
              ];
              u.forEach((t) => {
                e[t] = function () {
                  let n;
                  return (n = e.store)[t].apply(n, arguments), e;
                };
              });
              const f = Wi();
              const h = function () {
                const t = function (t, r) {
                  e.isInitialized
                      && !e.initializedStoreOnce
                      && e.logger.warn(
                        'init: i18next is already initialized. You should call init just once!',
                      ),
                  (e.isInitialized = true),
                  e.options.isClone
                        || e.logger.log('initialized', e.options),
                  e.emit('initialized', e.options),
                  f.resolve(r),
                  n(t, r);
                };
                if (
                  e.languages
                    && e.options.compatibilityAPI !== 'v1'
                    && !e.isInitialized
                ) { return t(null, e.t.bind(e)); }
                e.changeLanguage(e.options.lng, t);
              };
              return (
                this.options.resources || !this.options.initImmediate
                  ? h()
                  : setTimeout(h, 0),
                f
              );
            },
          },
          {
            key: 'loadResources',
            value(e) {
              const t = this;
              const n = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Ns;
              let r = n;
              const i = typeof e === 'string' ? e : this.language;
              if (
                (typeof e === 'function' && (r = e),
                !this.options.resources
                    || this.options.partialBundledLanguages)
              ) {
                if (i && i.toLowerCase() === 'cimode') return r();
                const s = [];
                const o = function (e) {
                  e
                      && t.services.languageUtils
                        .toResolveHierarchy(e)
                        .forEach((e) => {
                          s.indexOf(e) < 0 && s.push(e);
                        });
                };
                if (i) o(i);
                else {
                  const a = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng,
                  );
                  a.forEach((e) => o(e));
                }
                this.options.preload
                    && this.options.preload.forEach((e) => o(e)),
                this.services.backendConnector.load(s, this.options.ns, r);
              } else r(null);
            },
          },
          {
            key: 'reloadResources',
            value(e, t, n) {
              const r = Wi();
              return (
                e || (e = this.languages),
                t || (t = this.options.ns),
                n || (n = Ns),
                this.services.backendConnector.reload(e, t, (e) => {
                  r.resolve(), n(e);
                }),
                r
              );
            },
          },
          {
            key: 'use',
            value(e) {
              if (!e) {
                throw new Error(
                  'You are passing an undefined module! Please check the object you are passing to i18next.use()',
                );
              }
              if (!e.type) {
                throw new Error(
                  'You are passing a wrong module! Please check the object you are passing to i18next.use()',
                );
              }
              return (
                e.type === 'backend' && (this.modules.backend = e),
                (e.type === 'logger' || (e.log && e.warn && e.error))
                    && (this.modules.logger = e),
                e.type === 'languageDetector'
                    && (this.modules.languageDetector = e),
                e.type === 'i18nFormat' && (this.modules.i18nFormat = e),
                e.type === 'postProcessor' && ls.addPostProcessor(e),
                e.type === 'formatter' && (this.modules.formatter = e),
                e.type === '3rdParty' && this.modules.external.push(e),
                this
              );
            },
          },
          {
            key: 'changeLanguage',
            value(e, t) {
              const n = this;
              this.isLanguageChangingTo = e;
              const r = Wi();
              this.emit('languageChanging', e);
              const i = function (e) {
                if (
                  ((n.language = e),
                  (n.languages = n.services.languageUtils.toResolveHierarchy(e)),
                  (n.resolvedLanguage = void 0),
                  !(['cimode', 'dev'].indexOf(e) > -1))
                ) {
                  for (let t = 0; t < n.languages.length; t++) {
                    const r = n.languages[t];
                    if (
                      !(['cimode', 'dev'].indexOf(r) > -1)
                        && n.store.hasLanguageSomeTranslations(r)
                    ) {
                      n.resolvedLanguage = r;
                      break;
                    }
                  }
                }
              };
              const s = function (s) {
                e || s || !n.services.languageDetector || (s = []);
                const o = typeof s === 'string'
                  ? s
                  : n.services.languageUtils.getBestMatchFromCodes(s);
                o
                    && (n.language || i(o),
                    n.translator.language || n.translator.changeLanguage(o),
                    n.services.languageDetector
                      && n.services.languageDetector.cacheUserLanguage(o)),
                n.loadResources(o, (e) => {
                  !(function (e, s) {
                    s
                      ? (i(s),
                      n.translator.changeLanguage(s),
                      (n.isLanguageChangingTo = void 0),
                      n.emit('languageChanged', s),
                      n.logger.log('languageChanged', s))
                      : (n.isLanguageChangingTo = void 0),
                    r.resolve(function () {
                      return n.t.apply(n, arguments);
                    }),
                    t
                            && t(e, function () {
                              return n.t.apply(n, arguments);
                            });
                  }(e, o));
                });
              };
              return (
                e
                  || !this.services.languageDetector
                  || this.services.languageDetector.async
                  ? !e
                      && this.services.languageDetector
                      && this.services.languageDetector.async
                    ? this.services.languageDetector.detect(s)
                    : s(e)
                  : s(this.services.languageDetector.detect()),
                r
              );
            },
          },
          {
            key: 'getFixedT',
            value(e, t, n) {
              const r = this;
              const i = function e(t, i) {
                let s;
                if (Ti(i) !== 'object') {
                  for (
                    var o = arguments.length,
                      a = new Array(o > 2 ? o - 2 : 0),
                      c = 2;
                    c < o;
                    c++
                  ) { a[c - 2] = arguments[c]; }
                  s = r.options.overloadTranslationOptionHandler(
                    [t, i].concat(a),
                  );
                } else s = Ds({}, i);
                (s.lng = s.lng || e.lng),
                (s.lngs = s.lngs || e.lngs),
                (s.ns = s.ns || e.ns);
                const l = r.options.keySeparator || '.';
                const u = n ? ''.concat(n).concat(l).concat(t) : t;
                return r.t(u, s);
              };
              return (
                typeof e === 'string' ? (i.lng = e) : (i.lngs = e),
                (i.ns = t),
                (i.keyPrefix = n),
                i
              );
            },
          },
          {
            key: 't',
            value() {
              let e;
              return (
                this.translator
                  && (e = this.translator).translate.apply(e, arguments)
              );
            },
          },
          {
            key: 'exists',
            value() {
              let e;
              return (
                this.translator
                  && (e = this.translator).exists.apply(e, arguments)
              );
            },
          },
          {
            key: 'setDefaultNamespace',
            value(e) {
              this.options.defaultNS = e;
            },
          },
          {
            key: 'hasLoadedNamespace',
            value(e) {
              const t = this;
              const n = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
              if (!this.isInitialized) {
                return (
                  this.logger.warn(
                    'hasLoadedNamespace: i18next was not initialized',
                    this.languages,
                  ),
                  false
                );
              }
              if (!this.languages || !this.languages.length) {
                return (
                  this.logger.warn(
                    'hasLoadedNamespace: i18n.languages were undefined or empty',
                    this.languages,
                  ),
                  false
                );
              }
              const r = this.resolvedLanguage || this.languages[0];
              const i = !!this.options && this.options.fallbackLng;
              const s = this.languages[this.languages.length - 1];
              if (r.toLowerCase() === 'cimode') return true;
              const o = function (e, n) {
                const r = t.services.backendConnector.state[
                  ''.concat(e, '|').concat(n)
                ];
                return r === -1 || r === 2;
              };
              if (n.precheck) {
                const a = n.precheck(this, o);
                if (void 0 !== a) return a;
              }
              return (
                !!this.hasResourceBundle(r, e)
                  || !this.services.backendConnector.backend
                  || !(!o(r, e) || (i && !o(s, e)))
              );
            },
          },
          {
            key: 'loadNamespaces',
            value(e, t) {
              const n = this;
              const r = Wi();
              return this.options.ns
                ? (typeof e === 'string' && (e = [e]),
                e.forEach((e) => {
                  n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                }),
                this.loadResources((e) => {
                  r.resolve(), t && t(e);
                }),
                r)
                : (t && t(), Promise.resolve());
            },
          },
          {
            key: 'loadLanguages',
            value(e, t) {
              const n = Wi();
              typeof e === 'string' && (e = [e]);
              const r = this.options.preload || [];
              const i = e.filter((e) => r.indexOf(e) < 0);
              return i.length
                ? ((this.options.preload = r.concat(i)),
                this.loadResources((e) => {
                  n.resolve(), t && t(e);
                }),
                n)
                : (t && t(), Promise.resolve());
            },
          },
          {
            key: 'dir',
            value(e) {
              return (
                e
                    || (e = this.resolvedLanguage
                      || (this.languages && this.languages.length > 0
                        ? this.languages[0]
                        : this.language)),
                e
                  ? [
                    'ar',
                    'shu',
                    'sqr',
                    'ssh',
                    'xaa',
                    'yhd',
                    'yud',
                    'aao',
                    'abh',
                    'abv',
                    'acm',
                    'acq',
                    'acw',
                    'acx',
                    'acy',
                    'adf',
                    'ads',
                    'aeb',
                    'aec',
                    'afb',
                    'ajp',
                    'apc',
                    'apd',
                    'arb',
                    'arq',
                    'ars',
                    'ary',
                    'arz',
                    'auz',
                    'avl',
                    'ayh',
                    'ayl',
                    'ayn',
                    'ayp',
                    'bbz',
                    'pga',
                    'he',
                    'iw',
                    'ps',
                    'pbt',
                    'pbu',
                    'pst',
                    'prp',
                    'prd',
                    'ug',
                    'ur',
                    'ydd',
                    'yds',
                    'yih',
                    'ji',
                    'yi',
                    'hbo',
                    'men',
                    'xmn',
                    'fa',
                    'jpr',
                    'peo',
                    'pes',
                    'prs',
                    'dv',
                    'sam',
                    'ckb',
                  ].indexOf(
                    this.services.languageUtils.getLanguagePartFromCode(e),
                  ) > -1 || e.toLowerCase().indexOf('-arab') > 1
                    ? 'rtl'
                    : 'ltr'
                  : 'rtl'
              );
            },
          },
          {
            key: 'cloneInstance',
            value() {
              const e = this;
              const t = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              const n = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Ns;
              const r = Ds(Ds(Ds({}, this.options), t), { isClone: true });
              const s = new i(r);
              const o = ['store', 'services', 'language'];
              return (
                o.forEach((t) => {
                  s[t] = e[t];
                }),
                (s.services = Ds({}, this.services)),
                (s.services.utils = {
                  hasLoadedNamespace: s.hasLoadedNamespace.bind(s),
                }),
                (s.translator = new ps(s.services, s.options)),
                s.translator.on('*', function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  ) { n[r - 1] = arguments[r]; }
                  s.emit.apply(s, [e].concat(n));
                }),
                s.init(r, n),
                (s.translator.options = s.options),
                (s.translator.backendConnector.services.utils = {
                  hasLoadedNamespace: s.hasLoadedNamespace.bind(s),
                }),
                s
              );
            },
          },
          {
            key: 'toJSON',
            value() {
              return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
                resolvedLanguage: this.resolvedLanguage,
              };
            },
          },
        ]),
        i
      );
    }(qi));
    $i(Is, 'createInstance', function () {
      const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const t = arguments.length > 1 ? arguments[1] : void 0;
      return new Is(e, t);
    });
    const Ms = Is.createInstance();
    (Ms.createInstance = Is.createInstance),
    Ms.createInstance,
    Ms.init,
    Ms.loadResources,
    Ms.reloadResources,
    Ms.use,
    Ms.changeLanguage,
    Ms.getFixedT,
    Ms.t,
    Ms.exists,
    Ms.setDefaultNamespace,
    Ms.hasLoadedNamespace,
    Ms.loadNamespaces,
    Ms.loadLanguages;
    const $s = Ms;
    const zs = {
      string: { url: () => ({ key: 'notUrl' }) },
      mixed: {
        required: () => ({ key: 'required' }),
        notOneOf: () => ({ key: 'exists' }),
      },
    };
    const Us = {
      en: {
        translation: {
          loading: { success: 'Rss has been loaded' },
          errors: {
            exists: 'Rss already exists',
            required: 'Required',
            notUrl: 'Must be valid url',
            noRss: "This source doesn't contain valid rss",
            network: 'Network error',
            unknown: 'Something went wrong',
          },
          feeds: 'Feeds',
          posts: 'Posts',
          preview: 'Preview',
        },
      },
      ru: {
        translation: {
          loading: { success: 'RSS успешно загружен' },
          errors: {
            exists: 'RSS уже существует',
            required: 'Не должно быть пустым',
            notUrl: 'Ссылка должна быть валидным URL',
            noRss: 'Ресурс не содержит валидный RSS',
            network: 'Ошибка сети',
            unknown: 'Неизвестная ошибка. Что-то пошло не так.',
          },
          feeds: 'Фиды',
          posts: 'Посты',
          preview: 'Просмотр',
        },
      },
    };
    const parseXmlRss = (rssBody) => {
      const domParser = new DOMParser().parseFromString(rssBody, 'text/xml');
      const parseError = domParser.querySelector('parsererror');
      if (parseError) {
        const errorObj = new Error(parseError.textContent);
        throw ((errorObj.isParsingError = true), (errorObj.data = rssBody), errorObj);
      }
      return {
        title: domParser.querySelector('channel > title').textContent,
        description: domParser.querySelector('channel > description').textContent,
        items: [...domParser.querySelectorAll('item')].map((e) => ({
          title: e.querySelector('title').textContent,
          link: e.querySelector('link').textContent,
          description: e.querySelector('description').textContent,
        })),
      };
    };
    const Bs = '.';
    const Vs = Symbol('target');
    const qs = Symbol('unsubscribe');
    function Ws(e) {
      return (
        e instanceof Date
          || e instanceof Set
          || e instanceof Map
          || e instanceof WeakSet
          || e instanceof WeakMap
          || ArrayBuffer.isView(e)
      );
    }
    const Ks = Array.isArray;
    function Js(e) {
      return typeof e === 'symbol';
    }
    const Ys = {
      after: (e, t) => (Ks(e) ? e.slice(t.length) : t === '' ? e : e.slice(t.length + 1)),
      concat: (e, t) => (Ks(e)
        ? ((e = [...e]), t && e.push(t), e)
        : t && void 0 !== t.toString
          ? (e !== '' && (e += Bs), Js(t) ? e + t.toString() : e + t)
          : e),
      initial: (e) => {
        if (Ks(e)) return e.slice(0, -1);
        if (e === '') return e;
        const t = e.lastIndexOf(Bs);
        return t === -1 ? '' : e.slice(0, t);
      },
      last: (e) => {
        if (Ks(e)) return e[e.length - 1] || '';
        if (e === '') return e;
        const t = e.lastIndexOf(Bs);
        return t === -1 ? e : e.slice(t + 1);
      },
      walk: (e, t) => {
        if (Ks(e)) for (const n of e) t(n);
        else if (e !== '') {
          let n = 0;
          let r = e.indexOf(Bs);
          if (r === -1) t(e);
          else {
            for (; n < e.length;) {
              r === -1 && (r = e.length),
              t(e.slice(n, r)),
              (n = r + 1),
              (r = e.indexOf(Bs, n));
            }
          }
        }
      },
      get(e, t) {
        return (
          this.walk(t, (t) => {
            e && (e = e[t]);
          }),
          e
        );
      },
    };
    const Xs = Ys;
    function Qs(e, t, n) {
      return (
        e.isUnsubscribed
          || (t.ignoreSymbols && Js(n))
          || (t.ignoreUnderscores && n.charAt(0) === '_')
          || ('ignoreKeys' in t && t.ignoreKeys.includes(n))
      );
    }
    class Gs {
      constructor(e) {
        (this._equals = e),
        (this._proxyCache = new WeakMap()),
        (this._pathCache = new WeakMap()),
        (this.isUnsubscribed = false);
      }

      _getDescriptorCache() {
        return (
          void 0 === this._descriptorCache
              && (this._descriptorCache = new WeakMap()),
          this._descriptorCache
        );
      }

      _getProperties(e) {
        const t = this._getDescriptorCache();
        let n = t.get(e);
        return void 0 === n && ((n = {}), t.set(e, n)), n;
      }

      _getOwnPropertyDescriptor(e, t) {
        if (this.isUnsubscribed) { return Reflect.getOwnPropertyDescriptor(e, t); }
        const n = this._getProperties(e);
        let r = n[t];
        return (
          void 0 === r
              && ((r = Reflect.getOwnPropertyDescriptor(e, t)), (n[t] = r)),
          r
        );
      }

      getProxy(e, t, n, r) {
        if (this.isUnsubscribed) return e;
        const i = e[r];
        const s = i || e;
        this._pathCache.set(s, t);
        let o = this._proxyCache.get(s);
        return (
          void 0 === o
              && ((o = void 0 === i ? new Proxy(e, n) : e),
              this._proxyCache.set(s, o)),
          o
        );
      }

      getPath(e) {
        return this.isUnsubscribed ? void 0 : this._pathCache.get(e);
      }

      isDetached(e, t) {
        return !Object.is(e, Xs.get(t, this.getPath(e)));
      }

      defineProperty(e, t, n) {
        return (
          !!Reflect.defineProperty(e, t, n)
            && (this.isUnsubscribed || (this._getProperties(e)[t] = n), true)
        );
      }

      setProperty(e, t, n, r, i) {
        if (!this._equals(i, n) || !(t in e)) {
          const i = this._getOwnPropertyDescriptor(e, t);
          return void 0 !== i && 'set' in i
            ? Reflect.set(e, t, n, r)
            : Reflect.set(e, t, n);
        }
        return true;
      }

      deleteProperty(e, t, n) {
        if (Reflect.deleteProperty(e, t)) {
          if (!this.isUnsubscribed) {
            const r = this._getDescriptorCache().get(e);
            r && (delete r[t], this._pathCache.delete(n));
          }
          return true;
        }
        return false;
      }

      isSameDescriptor(e, t, n) {
        const r = this._getOwnPropertyDescriptor(t, n);
        return (
          void 0 !== e
            && void 0 !== r
            && Object.is(e.value, r.value)
            && (e.writable || false) === (r.writable || false)
            && (e.enumerable || false) === (r.enumerable || false)
            && (e.configurable || false) === (r.configurable || false)
            && e.get === r.get
            && e.set === r.set
        );
      }

      isGetInvariant(e, t) {
        const n = this._getOwnPropertyDescriptor(e, t);
        return void 0 !== n && true !== n.configurable && true !== n.writable;
      }

      unsubscribe() {
        (this._descriptorCache = null),
        (this._pathCache = null),
        (this._proxyCache = null),
        (this.isUnsubscribed = true);
      }
    }
    function Zs(e) {
      return toString.call(e) === '[object Object]';
    }
    function eo() {
      return true;
    }
    function to(e, t) {
      return e.length !== t.length || e.some((e, n) => t[n] !== e);
    }
    const no = new Set([
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ]);
    const ro = new Set([
      'concat',
      'includes',
      'indexOf',
      'join',
      'keys',
      'lastIndexOf',
    ]);
    const io = {
      push: eo,
      pop: eo,
      shift: eo,
      unshift: eo,
      copyWithin: to,
      reverse: to,
      sort: to,
      splice: to,
      flat: to,
      fill: to,
    };
    const so = new Set([...no, ...ro, ...Object.keys(io)]);
    function oo(e, t) {
      if (e.size !== t.size) return true;
      for (const n of e) if (!t.has(n)) return true;
      return false;
    }
    const ao = ['keys', 'values', 'entries'];
    const co = new Set(['has', 'toString']);
    const lo = {
      add: oo,
      clear: oo,
      delete: oo,
      forEach: oo,
    };
    const uo = new Set([...co, ...Object.keys(lo), ...ao]);
    function fo(e, t) {
      if (e.size !== t.size) return true;
      let n;
      for (const [r, i] of e) { if (((n = t.get(r)), n !== i || (void 0 === n && !t.has(r)))) return true; }
      return false;
    }
    const ho = new Set([...co, 'get']);
    const po = {
      set: fo,
      clear: fo,
      delete: fo,
      forEach: fo,
    };
    const go = new Set([...ho, ...Object.keys(po), ...ao]);
    class mo {
      constructor(e, t, n, r) {
        (this._path = t),
        (this._isChanged = false),
        (this._clonedCache = new Set()),
        (this._hasOnValidate = r),
        (this._changes = r ? [] : null),
        (this.clone = void 0 === t ? e : this._shallowClone(e));
      }

      static isHandledMethod(e) {
        return no.has(e);
      }

      _shallowClone(e) {
        let t = e;
        if (Zs(e)) t = { ...e };
        else if (Ks(e)) t = [...e];
        else if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) { t = new Set([...e].map((e) => this._shallowClone(e))); } else if (e instanceof Map) {
          t = new Map();
          for (const [n, r] of e.entries()) t.set(n, this._shallowClone(r));
        }
        return this._clonedCache.add(t), t;
      }

      preferredThisArg(e, t, n, r) {
        return e
          ? (Ks(r)
            ? (this._onIsChanged = io[t])
            : r instanceof Set
              ? (this._onIsChanged = lo[t])
              : r instanceof Map && (this._onIsChanged = po[t]),
          r)
          : n;
      }

      update(e, t, n) {
        const r = Xs.after(e, this._path);
        if (t !== 'length') {
          let e = this.clone;
          Xs.walk(r, (t) => {
            e
                && e[t]
                && (this._clonedCache.has(e[t])
                  || (e[t] = this._shallowClone(e[t])),
                (e = e[t]));
          }),
          this._hasOnValidate
                && this._changes.push({ path: r, property: t, previous: n }),
          e && e[t] && (e[t] = n);
        }
        this._isChanged = true;
      }

      undo(e) {
        let t;
        for (let n = this._changes.length - 1; n !== -1; n--) {
          (t = this._changes[n]),
          (Xs.get(e, t.path)[t.property] = t.previous);
        }
      }

      isChanged(e) {
        return void 0 === this._onIsChanged
          ? this._isChanged
          : this._onIsChanged(this.clone, e);
      }
    }
    class vo extends mo {
      static isHandledMethod(e) {
        return so.has(e);
      }
    }
    class yo extends mo {
      undo(e) {
        e.setTime(this.clone.getTime());
      }

      isChanged(e, t) {
        return !t(this.clone.valueOf(), e.valueOf());
      }
    }
    class bo extends mo {
      static isHandledMethod(e) {
        return uo.has(e);
      }

      undo(e) {
        for (const t of this.clone) e.add(t);
        for (const t of e) this.clone.has(t) || e.delete(t);
      }
    }
    class _o extends mo {
      static isHandledMethod(e) {
        return go.has(e);
      }

      undo(e) {
        for (const [t, n] of this.clone.entries()) e.set(t, n);
        for (const t of e.keys()) this.clone.has(t) || e.delete(t);
      }
    }
    class wo extends mo {
      constructor(e, t, n, r) {
        super(void 0, t, n, r),
        (this._arg1 = n[0]),
        (this._weakValue = e.has(this._arg1));
      }

      isChanged(e) {
        return this._weakValue !== e.has(this._arg1);
      }

      undo(e) {
        this._weakValue && !e.has(this._arg1)
          ? e.add(this._arg1)
          : e.delete(this._arg1);
      }
    }
    class xo extends mo {
      constructor(e, t, n, r) {
        super(void 0, t, n, r),
        (this._weakKey = n[0]),
        (this._weakHas = e.has(this._weakKey)),
        (this._weakValue = e.get(this._weakKey));
      }

      isChanged(e) {
        return this._weakValue !== e.get(this._weakKey);
      }

      undo(e) {
        const t = e.has(this._weakKey);
        this._weakHas && !t
          ? e.set(this._weakKey, this._weakValue)
          : !this._weakHas && t
            ? e.delete(this._weakKey)
            : this._weakValue !== e.get(this._weakKey)
              && e.set(this._weakKey, this._weakValue);
      }
    }
    class Oo {
      constructor(e) {
        (this._stack = []), (this._hasOnValidate = e);
      }

      static isHandledType(e) {
        return Zs(e) || Ks(e) || Ws(e);
      }

      static isHandledMethod(e, t) {
        return Zs(e)
          ? mo.isHandledMethod(t)
          : Ks(e)
            ? vo.isHandledMethod(t)
            : e instanceof Set
              ? bo.isHandledMethod(t)
              : e instanceof Map
                ? _o.isHandledMethod(t)
                : Ws(e);
      }

      get isCloning() {
        return this._stack.length > 0;
      }

      start(e, t, n) {
        let r = mo;
        Ks(e)
          ? (r = vo)
          : e instanceof Date
            ? (r = yo)
            : e instanceof Set
              ? (r = bo)
              : e instanceof Map
                ? (r = _o)
                : e instanceof WeakSet
                  ? (r = wo)
                  : e instanceof WeakMap && (r = xo),
        this._stack.push(new r(e, t, n, this._hasOnValidate));
      }

      update(e, t, n) {
        this._stack[this._stack.length - 1].update(e, t, n);
      }

      preferredThisArg(e, t, n) {
        const { name: r } = e;
        const i = Oo.isHandledMethod(n, r);
        return this._stack[this._stack.length - 1].preferredThisArg(
          i,
          r,
          t,
          n,
        );
      }

      isChanged(e, t, n) {
        return this._stack[this._stack.length - 1].isChanged(e, t, n);
      }

      undo(e) {
        void 0 !== this._previousClone && this._previousClone.undo(e);
      }

      stop() {
        return (
          (this._previousClone = this._stack.pop()), this._previousClone.clone
        );
      }
    }
    const Eo = {
      equals: Object.is,
      isShallow: false,
      pathAsArray: false,
      ignoreSymbols: false,
      ignoreUnderscores: false,
      ignoreDetached: false,
      details: false,
    };
    const ko = (e, t, n = {}) => {
      n = { ...Eo, ...n };
      const r = Symbol('ProxyTarget');
      const {
        equals: i, isShallow: s, ignoreDetached: o, details: a,
      } = n;
      const c = new Gs(i);
      const l = typeof n.onValidate === 'function';
      const u = new Oo(l);
      const f = (e, t, r, i, s) => !l
          || u.isCloning
          || true === n.onValidate(Xs.concat(c.getPath(e), t), r, i, s);
      const h = (t, r, i, s) => {
        Qs(c, n, r) || (o && c.isDetached(t, e)) || p(c.getPath(t), r, i, s);
      };
      const p = (e, n, r, i, s) => {
        u.isCloning ? u.update(e, n, i) : t(Xs.concat(e, n), r, i, s);
      };
      const d = (e) => (e && e[r]) || e;
      const g = (t, i, a, l) => ((function (e) {
        return (
          (typeof e === 'object' ? e === null : typeof e !== 'function')
              || e instanceof RegExp
        );
      }(t))
          || a === 'constructor'
          || (s && !Oo.isHandledMethod(i, a))
          || Qs(c, n, a)
          || c.isGetInvariant(i, a)
          || (o && c.isDetached(i, e))
        ? t
        : (void 0 === l && (l = c.getPath(i)),
        c.getProxy(t, Xs.concat(l, a), m, r)));
      const m = {
        get(e, t, n) {
          if (Js(t)) {
            if (t === r || t === Vs) return e;
            if (t === qs && !c.isUnsubscribed && c.getPath(e).length === 0) { return c.unsubscribe(), e; }
          }
          const i = Ws(e) ? Reflect.get(e, t) : Reflect.get(e, t, n);
          return g(i, e, t);
        },
        set(e, t, n, s) {
          n = d(n);
          const o = e[r] || e;
          const a = o[t];
          if (i(a, n) && t in e) return true;
          const l = f(e, t, n, a);
          return l && c.setProperty(o, t, n, s, a)
            ? (h(e, t, e[t], a), true)
            : !l;
        },
        defineProperty(e, t, n) {
          if (!c.isSameDescriptor(n, e, t)) {
            const r = e[t];
            f(e, t, n.value, r)
                && c.defineProperty(e, t, n, r)
                && h(e, t, n.value, r);
          }
          return true;
        },
        deleteProperty(e, t) {
          if (!Reflect.has(e, t)) return true;
          const n = Reflect.get(e, t);
          const r = f(e, t, void 0, n);
          return r && c.deleteProperty(e, t, n)
            ? (h(e, t, void 0, n), true)
            : !r;
        },
        apply(t, n, s) {
          const o = n[r] || n;
          if (c.isUnsubscribed) return Reflect.apply(t, o, s);
          if (
            (false === a || (true !== a && !a.includes(t.name)))
              && Oo.isHandledType(o)
          ) {
            let r = Xs.initial(c.getPath(t));
            const a = Oo.isHandledMethod(o, t.name);
            u.start(o, r, s);
            let h = Reflect.apply(
              t,
              u.preferredThisArg(t, n, o),
              a ? s.map((e) => d(e)) : s,
            );
            const v = u.isChanged(o, i);
            const y = u.stop();
            if (
              (Oo.isHandledType(h)
                  && a
                  && (n instanceof Map
                    && t.name === 'get'
                    && (r = Xs.concat(r, s[0])),
                  (h = c.getProxy(h, r, m))),
              v)
            ) {
              const n = { name: t.name, args: s, result: h };
              const i = u.isCloning ? Xs.initial(r) : r;
              const a = u.isCloning ? Xs.last(r) : '';
              f(Xs.get(e, i), a, o, y, n) ? p(i, a, o, y, n) : u.undo(o);
            }
            return (n instanceof Map || n instanceof Set)
                && typeof (l = h) === 'object'
                && typeof l.next === 'function'
              ? (function (e, t, n, r, i) {
                const s = e.next;
                if (t.name === 'entries') {
                  e.next = function () {
                    const e = s.call(this);
                    return (
                      false === e.done
                            && ((e.value[0] = i(e.value[0], t, e.value[0], r)),
                            (e.value[1] = i(e.value[1], t, e.value[0], r))),
                      e
                    );
                  };
                } else if (t.name === 'values') {
                  const o = n[Vs].keys();
                  e.next = function () {
                    const e = s.call(this);
                    return (
                      false === e.done
                            && (e.value = i(e.value, t, o.next().value, r)),
                      e
                    );
                  };
                } else {
                  e.next = function () {
                    const e = s.call(this);
                    return (
                      false === e.done
                            && (e.value = i(e.value, t, e.value, r)),
                      e
                    );
                  };
                }
                return e;
              }(h, t, n, r, g))
              : h;
          }
          let l;
          return Reflect.apply(t, n, s);
        },
      };
      const v = c.getProxy(e, n.pathAsArray ? [] : '', m);
      return (t = t.bind(v)), l && (n.onValidate = n.onValidate.bind(v)), v;
    };
    (ko.target = (e) => (e && e[Vs]) || e),
    (ko.unsubscribe = (e) => e[qs] || e);




    const onChange = ko;
    const Co = (elements, state, i18n) => {
      const r = onChange(state, (path) => {
        switch (path) {
          case 'form':
            ((state) => {
              const {
                form: { valid, error },
              } = state;
              const { input, feedback } = elements;
              valid
                ? input.classList.remove('is-invalid')
                : (input.classList.add('is-invalid'),
                feedback.classList.add('text-danger'),
                (feedback.textContent = i18n.t([`errors.${error}`, 'errors.unknown'])));
            })(state);
            break;
          case 'loadingProcess.status':
            ((state) => {
              const { loadingProcess } = state;
              const { submit, input, feedback } = elements;
              switch (loadingProcess.status) {
                case 'failed':
                  (submit.disabled = false),
                  input.removeAttribute('readonly'),
                  feedback.classList.add('text-danger'),
                  (feedback.textContent = i18n.t([
                    `errors.${loadingProcess.error}`,
                    'errors.unknown',
                  ]));
                  break;
                case 'idle':
                  (submit.disabled = false),
                  input.removeAttribute('readonly'),
                  (input.value = ''),
                  feedback.classList.add('text-success'),
                  (feedback.textContent = i18n.t('loading.success')),
                  input.focus();
                  break;
                case 'loading':
                  (submit.disabled = true),
                  input.setAttribute('readonly', true),
                  feedback.classList.remove('text-success'),
                  feedback.classList.remove('text-danger'),
                  (feedback.innerHTML = '');
                  break;
                default:
                  throw new Error(
                    `Unknown loadingProcess status: '${loadingProcess.status}'`,
                  );
              }
            })(state);
            break;
          case 'feeds':
            ((state) => {
              const { feeds } = state;
              const { feedsBox } = elements;
              const htmlDiv = document.createElement('div');
              htmlDiv.classList.add('card', 'border-0'),
              (htmlDiv.innerHTML = "\n      <div class='card-body'></div>\n    ");
              const o = document.createElement('h2');
              o.classList.add('card-title', 'h4'),
              (o.textContent = i18n.t('feeds')),
              htmlDiv.querySelector('.card-body').appendChild(o);
              const htmlUl = document.createElement('ul');
              htmlUl.classList.add('list-group', 'border-0', 'rounded-0');
              const listLi = feeds.map((e) => {
                const htmlLi = document.createElement('li');
                htmlLi.classList.add(
                  'list-group-item',
                  'border-0',
                  'border-end-0',
                );
                const htmlH3 = document.createElement('h3');
                htmlH3.classList.add('h6', 'm-0'), (htmlH3.textContent = e.title);
                const htmlP = document.createElement('p');
                return (
                  htmlP.classList.add('m-0', 'small', 'text-black-50'),
                  (htmlP.textContent = e.description),
                  htmlLi.append(htmlH3, htmlP),
                  htmlLi
                );
              });
              htmlUl.append(...listLi),
              htmlDiv.appendChild(htmlUl),
              (feedsBox.innerHTML = ''),
              feedsBox.appendChild(htmlDiv);
            })(state);
            break;



          case 'posts':
          case 'ui.seenPosts':
            ((state) => {
              const { posts, ui } = state;
              const { postsBox } = elements;
              const htmlDiv = document.createElement('div');
              htmlDiv.classList.add('card', 'border-0'),
              (htmlDiv.innerHTML = "\n      <div class='card-body'></div>\n    ");
              const htmlH2 = document.createElement('h2');
              htmlH2.classList.add('card-title', 'h4'),
              (htmlH2.textContent = i18n.t('posts')),
              htmlDiv.querySelector('.card-body').appendChild(htmlH2);
              const htmlUl = document.createElement('ul');
              htmlUl.classList.add('list-group', 'border-0', 'rounded-0');
              const listLi = posts.map((e) => {
                const htmlLi = document.createElement('li');
                htmlLi.classList.add(
                  'list-group-item',
                  'd-flex',
                  'justify-content-between',
                  'align-items-start',
                  'border-0',
                  'border-end-0',
                );
                const htmlA = document.createElement('a');
                htmlA.setAttribute('href', e.link);
                const s = ui.seenPosts.has(e.id)
                  ? ['fw-normal', 'link-secondary']
                  : ['fw-bold'];
                htmlA.classList.add(...s),
                (htmlA.dataset.id = e.id),
                (htmlA.textContent = e.title),
                htmlA.setAttribute('target', '_blank'),
                htmlA.setAttribute('rel', 'noopener noreferrer'),
                htmlLi.appendChild(htmlA);
                const htmlButton = document.createElement('button');
                return (
                  htmlButton.setAttribute('type', 'button'),
                  htmlButton.classList.add('btn', 'btn-outline-primary', 'btn-sm'),
                  (htmlButton.dataset.id = e.id),
                  (htmlButton.dataset.bsToggle = 'modal'),
                  (htmlButton.dataset.bsTarget = '#modal'),
                  (htmlButton.textContent = i18n.t('preview')),
                  htmlLi.appendChild(htmlButton),
                  htmlLi
                );
              });
              htmlUl.append(...listLi),
              htmlDiv.appendChild(htmlUl),
              (postsBox.innerHTML = ''),
              postsBox.appendChild(htmlDiv);
            })(state);
            break;
          case 'modal.postId':
            ((state) => {
              const postToShow = state.posts.find(({ id: e }) => e === state.modal.postId);
              const modalTitle = elements.modal.querySelector('.modal-title');
              const modalBody = elements.modal.querySelector('.modal-body');
              const modalArticle = elements.modal.querySelector('.full-article');
              (modalTitle.textContent = postToShow.title),
              (modalBody.textContent = postToShow.description),
              (modalArticle.href = postToShow.link);
            })(state);
        }
      });
      return r;
    };

    const makeAllOriginUrl = (rssUrl) => {
      const allOrigin = new URL('/get', 'https://hexlet-allorigins.herokuapp.com');
      return (
        allOrigin.searchParams.set('url', rssUrl),
        allOrigin.searchParams.set('disableCache', 'true'),
        allOrigin.toString()
      );
    };

    const updateRss = (state) => {
      const t = state.feeds.map((feed) => {
        const originUrl = makeAllOriginUrl(feed.url);
        return axios.get(originUrl)
          .then((rssResponce) => {
            const posts = parseXmlRss(rssResponce.data.contents).items.map((item) => ({
              ...item,
              channelId: feed.id,
            }));
            const statePosts = state.posts.filter((post) => post.channelId === feed.id);
            const newPosts = ji(posts, statePosts, (e, t) => e.title === t.title).map((e) => ({
              ...e,
              id: uniqueId(),
            }));
            state.posts.unshift(...newPosts);
          })
          .catch((e) => {
            console.error(e);
          });
      });
      Promise.all(t).finally(() => {
        setTimeout(() => updateRss(state), 5e3);
      });
    };

    (() => {
      const elements = {
        form: document.querySelector('.rss-form'),
        input: document.querySelector('.rss-form input'),
        feedback: document.querySelector('.feedback'),
        submit: document.querySelector('.rss-form button[type="submit"]'),
        feedsBox: document.querySelector('.feeds'),
        postsBox: document.querySelector('.posts'),
        modal: document.querySelector('#modal'),
      };

      const state = {
        feeds: [],
        posts: [],
        loadingProcess: { status: 'idle', error: null },
        form: { error: null, status: 'filling', valid: false },
        modal: { postId: null },
        ui: { seenPosts: new Set() },
      };

      const i18n = $s.createInstance();
      i18n.init({ lng: 'ru', debug: false, resources: Us }).then(() => {
        let r;
        (r = zs),
        Object.keys(r).forEach((e) => {
          Object.keys(r[e]).forEach((t) => {
            Qr[e][t] = r[e][t];
          });
        });
        const i = wi().url().required();
        const watchedState = Co(elements, state, i18n);
        elements.form.addEventListener('submit', (e) => {
          e.preventDefault();
          const rssUrl = new FormData(e.target).get('url');


          ((rssUrl, feeds) => {
            const feedUrls = feeds.map((e) => e.url);
            return i
              .notOneOf(feedUrls)
              .validate(rssUrl)
              .then(() => null)
              .catch((err) => err.message);
          })(rssUrl, watchedState.feeds).then((e) => {
            e
              ? (watchedState.form = { ...watchedState.form, valid: false, error: e.key })
              : ((watchedState.form = { ...watchedState.form, valid: true, error: null }),
              ((state, rssUrl) => {
                state.loadingProcess.status = 'loading';
                const originUrl = makeAllOriginUrl(rssUrl);
                axios.get(originUrl, { timeout: 1e4 })
                  .then((rssResponce) => {
                    const parsedFeed = parseXmlRss(rssResponce.data.contents);
                    const feed = {
                      url: rssUrl,
                      id: uniqueId(),
                      title: parsedFeed.title,
                      description: parsedFeed.description,
                    };
                    const posts = parsedFeed.items.map((item) => ({
                      ...item,
                      channelId: feed.id,
                      id: uniqueId(),
                    }));
                    state.posts.unshift(...posts),
                    state.feeds.unshift(feed),
                    (state.loadingProcess.error = null),
                    (state.loadingProcess.status = 'idle'),
                    (state.form = {
                      ...state.form,
                      status: 'filling',
                      error: null,
                    });
                  })
                  .catch((err) => {
                    console.log(err),
                    (state.loadingProcess.error = ((e) => (e.isParsingError
                      ? 'noRss'
                      : e.isAxiosError
                        ? 'network'
                        : 'unknown'))(err)),
                    (state.loadingProcess.status = 'failed');
                  });
              })(watchedState, rssUrl));
          });
        }),
        elements.postsBox.addEventListener('click', (e) => {
          if (!('id' in e.target.dataset)) return;
          const { id } = e.target.dataset;
          (watchedState.modal.postId = String(id)), watchedState.ui.seenPosts.add(id);
        }),
        setTimeout(() => updateRss(watchedState), 5e3);
      });
    })();
  })();
})();
