import CapwellUI from '../../src/index'
import '../../src/styles/index.scss'
import pageComponents from '@internal/page-components'

export default ({ Vue }) => { // the version of Vue being used in the VuePress app
	Vue.use(CapwellUI)
	for (const [name, component] of Object.entries(pageComponents)) {
		Vue.component(name, component)
	}
};
