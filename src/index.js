import CapBox from './components/CapBox.vue'
import CapMultiSearchDropdown from './components/CapMultiSearchDropdown.vue'
import CapButton from './components/CapButton.vue'
import CapMultiSelect from './components/CapMultiSelect.vue'
import CapCard from './components/CapCard.vue'
import CapNavBarNav from './components/CapNavBarNav.vue'
import CapColumn from './components/CapColumn.vue'
import CapNavItem from './components/CapNavItem.vue'
import CapDialog from './components/CapDialog.vue'
import CapInfoDialog from './components/CapInfoDialog.vue'
import CapDangerDialog from './components/CapDangerDialog.vue'
import CapNavbarBrand from './components/CapNavbarBrand.vue'
import CapDropdown from './components/CapDropdown.vue'
import CapOnClickAway from './components/CapOnClickAway.vue'
import CapDropdownItem from './components/CapDropdownItem.vue'
import CapRadio from './components/CapRadio.vue'
import CapFooter from './components/CapFooter.vue'
import CapSearchDropdown from './components/CapSearchDropdown.vue'
import CapFooterBrand from './components/CapFooterBrand.vue'
import CapSelect from './components/CapSelect.vue'
import CapFooterItem from './components/CapFooterItem.vue'
import CapSeprator from './components/CapSeprator.vue'
import CapFooterList from './components/CapFooterList.vue'
import CapSlider from './components/CapSlider.vue'
import CapForm from './components/CapForm.vue'
import CapSubFooter from './components/CapSubFooter.vue'
import CapFormRow from './components/CapFormRow.vue'
import CapText from './components/CapText.vue'
import CapHeader from './components/CapHeader.vue'
import CapTextarea from './components/CapTextarea.vue'
import CapInput from './components/CapInput.vue'
import CapTitle from './components/CapTitle.vue'
import CapLink from './components/CapLink.vue'
import CapModal from './components/CapModal.vue'
import CapTabs from './components/CapTabs.vue'
import CapTabPane from './components/CapTabPane.vue'
import CapFloatingLabelInput from './components/CapFloatingLabelInput.vue'
import CapFloatingLabelTextarea from './components/CapFloatingLabelTextarea.vue'

const components = {
    CapBox,
    CapMultiSearchDropdown,
    CapButton,
    CapMultiSelect,
    CapCard,
    CapNavBarNav,
    CapColumn,
    CapNavItem,
    CapDialog,
    CapInfoDialog,
    CapDangerDialog,
    CapNavbarBrand,
    CapDropdown,
    CapOnClickAway,
    CapDropdownItem,
    CapRadio,
    CapFooter,
    CapSearchDropdown,
    CapFooterBrand,
    CapSelect,
    CapFooterItem,
    CapSeprator,
    CapFooterList,
    CapSlider,
    CapForm,
    CapSubFooter,
    CapFormRow,
    CapText,
    CapHeader,
    CapTextarea,
    CapInput,
    CapTitle,
    CapLink,
    CapModal,
    CapTabs,
    CapTabPane,
    CapFloatingLabelInput,
    CapFloatingLabelTextarea
}

const install = function (Vue, opts = {}) {
    Object.values(components).forEach((component) => {
      Vue.component(component.name, component)
    })
}
  
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
  
  export default Object.assign({}, components, {install})