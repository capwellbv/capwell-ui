# Installation

Add `"@capwellbv/capwell-ui": "^0.1.0"` package as a dependency inside your `package.json` file.

```json
"dependencies": {
    "@capwellbv/capwell-ui": "^0.1.16"
  }
```
Run install.

<code-group>
<code-block title="NPM">
```bash
npm install
```
</code-block>
</code-group>

When using with a module system, you must explicitly install the capwell-ui via Vue.use()

```js
import Vue from 'vue'
import CapwellUI from '@capwellbv/capwell-ui'
import '@capwellbv/capwell-ui/styles/index.scss'

Vue.use(CapwellUI)
```