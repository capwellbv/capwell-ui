import DefaultButton from '../../src/components/DefaultButton'
import Title from '../../src/components/Title'
import Para from '../../src/components/Para'

export default ({
    Vue, // the version of Vue being used in the VuePress app
  }) => {
    Vue.component('DefaultButton', DefaultButton),
    Vue.component('Title', Title),
    Vue.component('Para', Para)
  }