module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "16C+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TEAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JUTSUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHARACTERS_BY_ID; });
/* unused harmony export TEAMS_BY_ID */
/* unused harmony export JUTSUS_BY_ID */
const baseURL =  false ? undefined : process.env.API;
const CHARACTERS = "/characters";
const TEAMS = "/teams";
const JUTSUS = "/jutsus";
const CHARACTERS_BY_ID = id => `${CHARACTERS}/${id}`;
const TEAMS_BY_ID = id => `${TEAMS}/${id}`;
const JUTSUS_BY_ID = id => `${JUTSUS}/${id}`;

/***/ }),

/***/ "1kmk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("16C+");


const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _constants_endpoints__WEBPACK_IMPORTED_MODULE_1__[/* baseURL */ "e"],
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});
/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mTPi");


/***/ }),

/***/ "CBHu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Search_Search; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-media-query"
var external_styled_media_query_ = __webpack_require__("wqYh");
var external_styled_media_query_default = /*#__PURE__*/__webpack_require__.n(external_styled_media_query_);

// CONCATENATED MODULE: ./components/Search/Search.styles.tsx


const Wrapper = external_styled_components_default.a.div`
  position: relative;
  width: 100%;
  padding: 2rem;

  ${external_styled_media_query_default.a.lessThan('medium')`
    padding: 1rem;
    display:flex;
    flex-direction: column;
  `}
`;
const Input = external_styled_components_default.a.input`
  width: 16rem;
  height: 2rem;
  background-color: ${({
  theme
}) => theme.colors.gray};
  color: ${({
  theme
}) => theme.colors.grayLight};
  line-height: 1.5;
  font-size: ${({
  theme
}) => theme.fontSize.small};
  transition: box-shadow 0.1s ease-in, border 0.1s ease-in,
    background-color 0.1s ease-in;
  border: ${({
  theme
}) => theme.width.border} solid
    ${({
  theme
}) => theme.colors.opac4};
  padding: 1rem;
  padding-left: 2.5rem;

  &:hover {
    border: ${({
  theme
}) => theme.width.border} solid
      ${({
  theme
}) => theme.colors.opac6};
  }

  &:focus {
    border: ${({
  theme
}) => theme.width.border} solid
      ${({
  theme
}) => theme.colors.orange};
    background-color: ${({
  theme
}) => theme.colors.black};
  }

  ${external_styled_media_query_default.a.lessThan('medium')`
    width: 100%; 
  `}
`;
const WrapperIcon = external_styled_components_default.a.div`
  position: absolute;
  top: 2.2rem;
  left: 8.6rem;
  height: 2rem;
  width: 2rem;
  z-index: 1;

  svg {
    fill: #adadb8;
  }

  ${external_styled_media_query_default.a.lessThan('medium')`
    top:4.5rem;
    left:1.2rem;
  `}
`;
const Span = external_styled_components_default.a.span`
  font-size: ${({
  theme
}) => theme.fontSize.medium};
  padding: 1rem;
  color: ${({
  theme
}) => theme.colors.orangeLight};
`;
// CONCATENATED MODULE: ./components/Search/Search.tsx






const Search = ({
  pathname
}) => {
  const router = Object(router_["useRouter"])();
  const {
    0: text,
    1: setText
  } = Object(external_react_["useState"])('');

  const onChange = event => {
    setText(event.target.value);
  };

  const handleOnKeyDown = event => {
    const ENTER = 'Enter';

    if (event.key === ENTER && text.length > 0) {
      router.push({
        pathname,
        query: {
          name: text
        }
      });
    }
  };

  const Icon = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(WrapperIcon, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
      width: "100%",
      height: "100%",
      version: "1.1",
      viewBox: "0 0 20 20",
      x: "0px",
      y: "0px",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fillRule: "evenodd",
          d: "M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z",
          clipRule: "evenodd"
        })
      })
    })
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Wrapper, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Span, {
      children: "Filter by"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, {
      placeholder: "Search",
      value: text,
      onChange: onChange,
      onKeyDown: handleOnKeyDown
    })]
  });
};

/* harmony default export */ var Search_Search = (Search);
// CONCATENATED MODULE: ./components/Search/index.tsx


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Ii2u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LINKS; });
const BASE = '';
const ROUTES = {
  home: '/',
  characters: `${BASE}/characters`,
  teams: `${BASE}/teams`,
  jutsus: `${BASE}/jutsus`,
  character: `${BASE}/characters/:id`,
  jutsu: `${BASE}/jutsus/:id`,
  team: `${BASE}/teams/:id`
};
const LINKS = {
  character: id => `${ROUTES.character.replace(':id', id)}`,
  team: id => `${ROUTES.team.replace(':id', id)}`,
  jutsu: id => `${ROUTES.jutsu.replace(':id', id)}`
};


/***/ }),

/***/ "XEse":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_Grid_Grid; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Grid/Grid.styles.tsx

const Grid = external_styled_components_default.a.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem;
  justify-content: center;
`;
// CONCATENATED MODULE: ./components/Grid/Grid.tsx



const Grid_Grid = ({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid, {
    children: children
  });
};

/* harmony default export */ var components_Grid_Grid = (Grid_Grid);
// CONCATENATED MODULE: ./components/Grid/index.tsx


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mTPi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./services/api.ts
var api = __webpack_require__("1kmk");

// EXTERNAL MODULE: ./constants/verbs.ts
var verbs = __webpack_require__("yWdK");

// EXTERNAL MODULE: ./constants/endpoints.ts
var endpoints = __webpack_require__("16C+");

// CONCATENATED MODULE: ./lib/teams.ts



async function getTeams() {
  try {
    const {
      data: {
        data
      }
    } = await Object(api["a" /* default */])({
      method: verbs["a" /* GET */],
      url: endpoints["d" /* TEAMS */]
    });
    return data;
  } catch (error) {
    //TODO: throw error
    console.log(error);
    return [];
  }
}
// EXTERNAL MODULE: ./constants/urls.ts
var urls = __webpack_require__("Ii2u");

// EXTERNAL MODULE: ./components/Grid/index.tsx + 2 modules
var Grid = __webpack_require__("XEse");

// EXTERNAL MODULE: ./components/Card/index.tsx + 2 modules
var Card = __webpack_require__("paeT");

// EXTERNAL MODULE: ./components/Search/index.tsx + 2 modules
var Search = __webpack_require__("CBHu");

// EXTERNAL MODULE: ./components/Alphabet/index.tsx + 3 modules
var Alphabet = __webpack_require__("sD61");

// CONCATENATED MODULE: ./pages/teams.tsx











async function getStaticProps() {
  const data = await getTeams();
  return {
    props: {
      data
    }
  };
}

const Teams = ({
  data
}) => {
  const {
    0: letter,
    1: setLetter
  } = Object(external_react_["useState"])('');
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Search["a" /* default */], {
      pathname: endpoints["d" /* TEAMS */]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Alphabet["a" /* default */], {
      pathname: endpoints["d" /* TEAMS */],
      letter: letter,
      setLetter: setLetter
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid["a" /* default */], {
      children: data.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* default */], {
        src: item.picture,
        name: item.name,
        id: item.id,
        onClick: urls["a" /* LINKS */].team
      }, item.id))
    })]
  });
};

/* harmony default export */ var teams = __webpack_exports__["default"] = (Teams);

/***/ }),

/***/ "paeT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_Card_Card; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Card/Card.styles.tsx

const Card = external_styled_components_default.a.div`
  width: 200px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;

    @keyframes shadow-pop-br {
      0% {
        box-shadow: 0 0 #f6894d, 0 0 #f6894d, 0 0 #f6894d, 0 0 #f6894d,
          0 0 #f6894d, 0 0 #f6894d, 0 0 #f6894d, 0 0 #f6894d;
        transform: translateX(0) translateY(0);
      }
      100% {
        box-shadow: 1px 1px #f8a77a, 2px 2px #f8a77a, 3px 3px #f8a77a,
          4px 4px #f8a77a, 5px 5px #f8a77a, 6px 6px #f8a77a, 7px 7px #f8a77a,
          8px 8px #f8a77a;
        transform: translateX(-8px) translateY(-8px);
      }
    }
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  span {
    padding-top: 0.5rem;
    color: ${({
  theme
}) => theme.colors.orangeLight};
    font-size: ${({
  theme
}) => theme.fontSize.medium};
  }
`;
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Card/Card.tsx





const Card_Card = ({
  id,
  src,
  name,
  onClick
}) => {
  const router = Object(router_["useRouter"])();

  const handleOnClick = () => {
    router.push(onClick(id));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card, {
    onClick: handleOnClick,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: src !== null && src !== void 0 ? src : 'https://milcouros.com.br/wp-content/themes/white/assets/images/placeholder.jpg',
      alt: name,
      loading: "lazy"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: name
    })]
  });
};

/* harmony default export */ var components_Card_Card = (Card_Card);
// CONCATENATED MODULE: ./components/Card/index.tsx


/***/ }),

/***/ "sD61":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_Alphabet_Alphabet; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./constants/index.ts
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Alphabet/Alphabet.styles.tsx

const Alphabet = external_styled_components_default.a.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Span = external_styled_components_default.a.span`
  padding: 0.1rem 1rem;
  color: ${({
  theme,
  active
}) => active ? theme.colors.orange : theme.colors.orangeLight};
  font-size: ${({
  theme
}) => theme.fontSize.medium};

  &:hover {
    transform: scale(1.7, 1.7);
    cursor: pointer;
  }
`;
// CONCATENATED MODULE: ./components/Alphabet/Alphabet.tsx





const Alphabet_Alphabet = ({
  letter,
  setLetter,
  pathname
}) => {
  const router = Object(router_["useRouter"])();

  const handleOnClick = alpha => () => {
    setLetter(alpha);
    router.push({
      pathname,
      query: {
        from: alpha
      }
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Alphabet, {
    children: alphabet.map(alpha => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Span, {
      active: letter === alpha,
      onClick: handleOnClick(alpha),
      children: alpha
    }, alpha))
  });
};

/* harmony default export */ var components_Alphabet_Alphabet = (Alphabet_Alphabet);
// CONCATENATED MODULE: ./components/Alphabet/index.tsx


/***/ }),

/***/ "wqYh":
/***/ (function(module, exports) {

module.exports = require("styled-media-query");

/***/ }),

/***/ "yWdK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET; });
/* unused harmony export POST */
/* unused harmony export DELETE */
/* unused harmony export PUT */
/* unused harmony export PATCH */
const GET = 'GET';
const POST = 'POST';
const DELETE = 'DELETE';
const PUT = 'PUT';
const PATCH = 'PATCH';

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });