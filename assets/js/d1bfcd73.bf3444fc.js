"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[8846],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},A=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),A=c(n),f=r,b=A["".concat(l,".").concat(f)]||A[f]||u[f]||i;return n?a.createElement(b,o(o({ref:e},p),{},{components:n})):a.createElement(b,o({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=A;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},69213:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return A},default:function(){return b}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(59943),s=["components"],l={slug:"masking-private-keys-in-ci-cd-pipelines-in-gitlab",title:"Masking Private Keys in CI/CD Pipelines in GitLab",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,tags:["ci","gitlab","gitlab-ci","private-keys","secrets"],keywords:["ci","gitlab","gitlab-ci","private-keys","secrets"]},c=void 0,p={permalink:"/masking-private-keys-in-ci-cd-pipelines-in-gitlab",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2021-06-15-masking-private-keys-in-ci-cd-pipelines-in-gitlab/index.md",source:"@site/blog/2021-06-15-masking-private-keys-in-ci-cd-pipelines-in-gitlab/index.md",title:"Masking Private Keys in CI/CD Pipelines in GitLab",description:"Big fan of GitLab (and GitLab CI in particular). I had a recent requirement to push changes to a wiki repo associated with a GitLab project through a GitLab CI pipeline (using the SaaS version of GitLab) and ran into a conundrum\u2026",date:"2021-06-15T00:00:00.000Z",formattedDate:"June 15, 2021",tags:[{label:"ci",permalink:"/tags/ci"},{label:"gitlab",permalink:"/tags/gitlab"},{label:"gitlab-ci",permalink:"/tags/gitlab-ci"},{label:"private-keys",permalink:"/tags/private-keys"},{label:"secrets",permalink:"/tags/secrets"}],readingTime:1.31,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],prevItem:{title:"Introducing the Metadata Hub (MDH)",permalink:"/introducing-the-metadata-hub-mdh"},nextItem:{title:"Simple Tasker: Configuration driven orchestration",permalink:"/simple-tasker-configuration-driven-orchestration"}},u={authorsImageUrls:[void 0]},A=[{value:"Setup",id:"setup",children:[]},{value:"The Code",id:"the-code",children:[]}],f={toc:A};function b(t){var e=t.components,l=(0,r.Z)(t,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Big fan of GitLab (and GitLab CI in particular). I had a recent requirement to push changes to a wiki repo associated with a GitLab project through a GitLab CI pipeline (using the SaaS version of GitLab) and ran into a conundrum\u2026"),(0,i.kt)("p",null,"Using the GitLab SaaS version - deploy tokens can\u2019t have write api access, so the next best solution is to use deploy keys, adding your public key as a deploy key and granting this key write access to repositories is relatively straightforward."),(0,i.kt)("p",null,"This issue is when you attempt to create a masked GitLab CI variable using the private key from your keypair, you get this\u2026"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(16627).Z},(0,i.kt)("img",{src:n(91891).Z}))),(0,i.kt)("p",null,"I was a bit astonished to see this to be honest\u2026 Looks like it has been raised as an issue several times over the last few years but never resolved (the root cause of which is something to do with newline characters or base64 encoding or the overall length of the string)."),(0,i.kt)("p",null,"I came up with a solution! Not pretty but effective, masks the variable so that it cannot be printed in CI logs as shown here:"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(61345).Z},(0,i.kt)("img",{src:n(52932).Z}))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Add a masked and protected GitLab variable for each line in the private key, for example:"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(50938).Z},(0,i.kt)("img",{src:n(58951).Z}))),(0,i.kt)("h2",{id:"the-code"},"The Code"),(0,i.kt)("p",null,"Add the following block to your ",(0,i.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," file:"),(0,i.kt)(o.Z,{id:"b5260f14ecc0bf0d080c80297d0b475c",mdxType:"Gist"}),(0,i.kt)("p",null,"now within Jobs in your pipeline you can simply do this to clone, push or pull from a remote GitLab repo:"),(0,i.kt)(o.Z,{id:"c96e211544f7cb4ef3ca4e90dc8e36e3",mdxType:"Gist"}),(0,i.kt)("p",null,"as mentioned not pretty, but effective and no other cleaner options as I could see\u2026"))}b.isMDXComponent=!0},61345:function(t,e,n){e.Z=n.p+"assets/files/ci-ssh-key-21fa947e5812357fc909715776d842dd.png"},16627:function(t,e,n){e.Z=n.p+"assets/files/masked-variable-a71bee3c260fb07842a2cf68e9f8b37e.png"},50938:function(t,e,n){e.Z=n.p+"assets/files/masked-vars-ab75ab02f93f5937aaffe559407d3cff.png"},59943:function(t,e,n){var a=n(67294);n(45697);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var o=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){this._updateIframeContent()},e.prototype.componentDidUpdate=function(t,e){this._updateIframeContent()},e.prototype._defineUrl=function(){var t=this.props,e=t.id,n=t.file;return"https://gist.github.com/"+e+".js"+(n?"?file="+n:"")},e.prototype._updateIframeContent=function(){var t=this.props,e=t.id,n=t.file,a=this.iframeNode,r=a.document;a.contentDocument?r=a.contentDocument:a.contentWindow&&(r=a.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+e+"-"+n:"gist-"+e)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(i),r.close()},e.prototype.render=function(){var t=this,e=this.props,n=e.id,r=e.file;return a.createElement("iframe",{ref:function(e){t.iframeNode=e},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},e}(a.PureComponent);e.Z=o},52932:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZIAAAC9CAIAAAAWbWz6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABBQSURBVHhe7Z3tddu4EkBfC2lg00AqiDtYN+BtwEXsSTdOI3YXyjmvB3fwHgafMwAoyTQFCvS9P/ZQIARClOYG4CYz//kGADAVaAsAJgNtAcBkoC0AmAy0BQCTgbYAYDLQFgBMBtoCgMlAWwAwGWgLACZjoLb++vn0nPjn5/fY+v3nP7Et8fTzr3gOAKBln9XWj7+fn//+EV9ofjw+Pz/2TtwH/76+/69w+h2bX/7EFs/pJTab9tDZ9gyNLyd39P76S85/+/b7VI57qBHSha6flRvcXeotDu86pONfaoj31399W6dRWvL4/rrlw9b0Z+U/bKLbGKb66+3d3gfpk/qHieVLV293hFN6/uoOd3AjpE/tpx0v5G9XxjXWs9KdYSD7aOv7w1NXW05nTw9pHXaH6EBVflHxn/Ex86cf1La/xMx71sFZbemwKcfVrFyrj8DOrGRwuVTonDv05r/4oUqU6uu29GelBCGN+u3qlEPerl7q2+JO/Xlx06t8ITfE3HA723PkS9u36ItGpEO+Ld37BgPYRVuyMeysqWQXecdLLUcViilIOj/fOiYNtr+Pmd8SivKqEyoZG9j5pdGHa4yB15/V++vL27vtYEIxsdhYotpct6E/K/URpEPv40QWBeH0JEOp+x/4vLbqO9b9LvK0z398uCVjtSV7QE95tlW496WWQ36pmfKTdT93hbSXEBJ/CToebHiEmHEx5oPhjLbqOElhqdvlcvG4nVUc3PX3lyjTSJ/LBHmnUa5o0fOx9GdV3FRWi5FKW7qDPuXmkIcyV+9qq7B0VwU//lvtwfzdBfJ98Bd6lY93lRNhe/bZJHaeYclSa+3DePXzsjpIlJ9st1H/vnMk9BqXBWH+lG5CqOrQ05Yf0L3F/XcpwPTVBZlh0lamdGhnlQd3p9wbmw7h5hh32MZ0xUA9H0t/Vt37H0j3ISMjpDuTO6vj8CkyXW1dZ5Y0q1Zb/e/C9zenrv4JhXkm8vS6jTKBRP1Vfm120pZ4y0hq8SH9XWECtYTZGUEEqg72ZR7H/cpPL4uh4qgCO71c0Me5Wbm3+MdDbTA0wS+kxo9qqz2bP4I7qDRRfTohzFDP0x0b1Aif05a7tPQ3N2T5u+jeOhjGfo/k9T7xM0utkehQlD8J43HvRyxhqYNNd7AvS7i6wJMn5ova8kGbIrMcr9CWhLS/VD1tc4lMatxQW2F9oTt0tOUn7O9IbK/6uJdlhE9rKxzYxQ7auksGais/2HKYZ1v+r27d/1LLIaGYKQEjUV3I7RIDmRAMtmdo1KHo37KsrRCKkdxtWVsK30HHoWg3xJ6ZZ4r8buOW2gqjdSZg3mVvSO2RPIJ/0dNW4dxdVbPyX3Ec09+ijDYg2tqXvTaJAAArQVsAMBloCwAmA20BwGSgLQCYDLQFAJOBtgBgMtAWAEwG2gKAyUBbADAZaAsAJgNtAcBkoC0AmAy0BQCTMVBb/YJjguQITKxKJl9SlOjsIjtTstwsZ3cBgI+zz2pL5zI1VXxWFhyzeaAEydOUMiJ5qZV0SzaFk0enpgrj6ORNcjb276VwMlmZdBI7z/mkVADwcfbRllaVqXyxsnhPT1vvp9Mfr5V/X09/TqHog/D79P72EutNeJr0ckJpNKnp2gvZDqIway60BbA1u2jLFhzzWU/9y9VpThubOFlIZa2TM8gv99/fsVaN4+WPaMVZKWenlMXUkrZq6VzSlh/N5L1EWwBbM1ZbOS9zXXAsnlhbcKyvrV9uneUWVrLmchvD4A63CvOKCR2kxeG3jW6ZpHTjtfWqF2UeuVAhjGC1Va/d0BbA1uyzSTTPsOQ41L/w8uqVULzEgrb82se3R20pp7i39JUUxpGewUxNn/OrLbQFcGt20pYYKqhKNoZqkaV9dj2NTZxKzL4vaCuKKdOpYpAcFO3jXhrpXNYWm0SAW7PfI/m4qrLPs8rK60Ncp63KIGlFphFbaW2pFs8FbUnnSlJoC2BrBmrLbwEjZieoT6yrlniNtt7/+1+7ffOPtE6/7RJMCyh1lmf2UT29zrIiSxTBJdAWwNbstUnclt4i6E5AWwBbg7ZuDNoC2JrjaCtwR/ISYcVJoS2ADTmGtgDgC4G2AGAy0BYATAbaAoDJQFsAMBloCwAmA20BwGSgLQCYDLQFAJOBtgBgMtAWAEzGQG1dU3BsTWpTB/8mEeALsc9qqy44lmyl2z9CmwFCcmmlLKNeaiUTlpyqEmP5jFqRME6dbyv2L34U2nxbrskkcSYDBMD27KMtVXDMZmGm4BgAXGIXbemCY05bOqNp9fJKGps4WVBwDOCgjNVWTr+snmHpjaF/yLWZtig4BnBI9tkk2q1hlplrcsdbbBKTldzax7dHbSmnuLf0lRTGkZ7BTE2f86sttAVwa3bS1tJm8K+fT2v+Z2JjE6cSs+8L2opiypjdXCA5KNrHvTTSuawtNokAt2a/R/KtnuR5/O0q91BwDOAgDNRW2QuaZ1uisMiK7WHgGm1RcAzgIOy1SdyW3iLoTkBbAFuDtm4M2gLYmuNoK3BH8hJhxUmhLYANOYa2AOALgbYAYDLQFgBMBtoCgMlAWwAwGWgLACYDbQHAZKAtAJgMtAUAk4G2AGAy0BYATMYO2grlxXSSmk/nruHfJAJ8IYZr68fj8z+Pj6UERsjDFV+J0TbJbupzaaUso15qJROWnKoSY/mMWpEwTp1vK/YvfhTafFuuySRxJgMEwPYM1lZQlK7cI8dPD8lUKxOc9rRFwTGAgzJUW6lIz1LBsZj/9OMbxcYmThYUHAM4KAO1VUq3ttqSliAsp7ay+LqWvrYoOAZwSIZpq94YKm1FYXn0qetZ0JZf+/j2qC3lFPeWvpLCONIzmKnpc361hbYAbs0obclSq0Gevoun1PJK7xmvp7GJU4nZ9wVtRTFlzG4ukBwU7eNeGulc1habRIBbM/iRfMAsqfzffoiq6hciu8x12qoMklZkGrGV1pZq8VzQlnSuJIW2ALZmf205yt/bWuMsxzXaouAYwEHYRVub01sE3QloC2Br0NaNQVsAW3McbQXuSF4irDgptAWwIcfQFgB8IdAWAEwG2gKAyUBbADAZaAsAJgNtAcBkoC0AmAy0BQCTgbYAYDLQFgBMBtoCgMnYQVttwTGHb1yRIDDAv0kE+EIM19aPpuCYz8v8+LCuZk+gzQAhubRSllEvtZIJS05VibF8Rq1IGKfOtxX7Fz8Kbb4t12SSOJMBAmB7BmvLG8oUHHPrLG+rlaXGAj1tUXAM4KAM1Vav4FhiW205WVBwDOCgDNRWv+BY4gbaouAYwCEZpi2tqlHa8msf3x61pZzi3tJXUhhHegYzNX3Or7bQFsCtGaUtsVKDLnixrbacSsy+L2griiljdnOB5KBoH/fSSOeyttgkAtyawY/kA7dfbXW1VRkkrcg0YiutLdXiuaAt6VxJCm0BbM3+2irVxiIr5HWNtig4BnAQdtHW5vQWQXcC2gLYGrR1Y9AWwNYcR1uBO5KXCCtOCm0BbMgxtAUAXwi0BQCTgbYAYDLQFgBMBtoCgMlAWwAwGWgLACYDbQHAZKAtAJgMtAUAk4G2AGAydtBWU3BM8thEJNP8Cvg3iQBfiOHaagqOfX94enoIWU6lrk86/hBtBgjJpZWyjHqplUxYcqpKjOUzakXCOHW+rdi/+FFo8225JpPEmQwQANszWFudgmOaVNrno/S0RcExgIMyVFvnCo55NtOWkwUFxwAOykBtSbb4IKsFbfk94qp08n1tUXAM4JAM05ZWVU9bvrRPdwl2BQva8msf3x61pZzi3tJXUhhHegYzNX3Or7bQFsCtGaWt8wXH/NlVD+MDjU2cSsy+L2griiljdnOB5KBoH/fSSOeyttgkAtyawY/kA3a19VlnOa7TVmWQtCLTiK20tlSL54K2pHMlKbQFsDX7ayv8NS4FBccA4By7aGtzeougOwFtAWwN2roxaAtga46jrcAdyUuEFSeFtgA25BjaAoAvBNoCgMlAWwAwGWgLACYDbQHAZKAtAJgMtAUAk4G2AGAy0BYATAbaAoDJQFsAMBk7aKsuOCa5mBMUHAOASwzXVlNwTCF5uCg4BgDnGaytywXHNtMWBccADspQbV0qOOaktmXlHgqOARySgdpaLjj2/SHVx/jEs61WWxQcAzgkw7SlVbW4SRR/5XI+H2BBW37t49ujtpRT3Fv6SgrjSM9gpqbP+dUW2gK4NaO0db7gWKasyD5EYxOnErPvC9qKYsqY3VwgOSjax7000rmsLTaJALdm8CP5wLlH8tsU0+9qqzJIWpFpxFZaW6rFc0Fb0rmSFNoC2Jr9tVUebDm2erbV0RYFxwAOwi7a2pzeIuhOQFsAW4O2bgzaAtia42grcEfyEmHFSaEtgA05hrYA4AuBtgBgMtAWAEwG2gKAyUBbADAZaAsAJgNtAcBkoC0AmAy0BQCTgbYAYDLQFgBMxg7aqguORSSbzfPKXPIA8IUYrq2FgmOSdevvx7UlMIaxmG9LF9SQY52Ey/UzmZ1b1LAm42Am/WPs8s+zhXDR0DP9G3KVDEN3zonAOo2SjKzMUGU9bLliVmkoO1U/pszNpH6Vu5QGsbexfrsjzMq2m9EqpKcePEys/QbrWXVyPcKdMVhbCwXHJBezE9bqyj3DUFLISJy/5wgp2srBX2Kmj6Qh1CkJc1ZV3ViCto4o6ekmEC+XZ2hlFLmiUc+84eKs/GTU2+2Eq7PxXsXjd11gKaP7CL070Kf01B+w9w1Kz9yhe4vgvhiqrYWCY/LSl0ecV1uvL2/voT2GmQ3+OvY0VRyml1oQXny+Ty9oQ89QSK3M0IRiotu4Vlv9WeXGQDVhMwF93VBRyU2+nt6ntVV9Zb1vMHwu/6nNB4R7ZaC2lgqOybYx1MKYQ1uFEN4hzl2Q+JddbZ0LhloTMZj1W9yY8VhCsRDiOfZ040ifEpbSLpgg7zW6K1rMfAzLs4oDlsZAbRmZXtSQ/uBSczd+FiMpP6Bp6d2BPv7Sr/WAvW8wtZ/e5D9qtnCnDNOWVpU+1qpaqy0XAAn1G1XRWH6d3Ub9U86/2sXG+s/qFH4uwNypGGZWRjraa2xPP8OkrUx+b20BIQ3u5ube2Mww3BxziaoxXjFSz8ewPKtE9TGbCcsIfnzlIzVn199evaet68ySZtVqq/4GA/6e2M63+AmZe9ifCVxilLaWCo45U7WsLIQxgN6PPse5ixPZrHW0VceeporD9DLJyNIL2tJT1iwvnRn2YzU3flBbZ2YlBxctEy6nLurfpVCTaW9d7w70iT3FMuqzd29FwN4HuGMGP5IPVM+2MnNsEusffYlzd1Yezlfa8n+6nok0GTNFZjleoy0fePJ/B+qwrEI3kBttuH5GW26s/Jw+0JuwmEhuk7o/akz3Unvq09oKB/kDoq0jgLY+hPzoCyHwdJy747Dc8AeRZQskxCCRFMDLgii0gpPjICM9geysbuOm2gqfRUa2UzVj5rskNB6Rs0VMPW0VzKkKPSt/RX+V3jcYQVvTsIu2AADWg7YAYDLQFgBMBtoCgMlAWwAwGWgLACYDbQHAZKAtAJgMtAUAU/Ht2/8B+g97HsubHCAAAAAASUVORK5CYII="},91891:function(t,e,n){e.Z=n.p+"assets/images/masked-variable-a71bee3c260fb07842a2cf68e9f8b37e.png"},58951:function(t,e,n){e.Z=n.p+"assets/images/masked-vars-ab75ab02f93f5937aaffe559407d3cff.png"}}]);