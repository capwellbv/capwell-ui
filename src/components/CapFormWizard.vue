<template>
    <div>
      <div class="wizard-header" v-if="header">
        <slot name="header" :tabs="tabs">
          <ul class="steps">
            <li class="steps-segment" v-for="tab in tabs" :class="{ 'is-active': tab.isActive }" v-bind:key="tab.name">
              <span class="steps-marker"></span>
              <div class="steps-content">
              </div>
            </li>
          </ul>                    
        </slot>
      </div>
        <div class="tab-details">
            <slot></slot>
        </div>
        <br/>
        <div class="wizad-footer" v-if="footer">
            <div class="control" v-if="currentActive > 0">
                <button @click="previousTab()" class="button is-primary">Previous</button>
            </div>
            <div class="control" v-if="currentActive < totalTabs - 1">
                <button @click="nextTab()" class="button is-link">Next</button>
            </div>
        </div>
                
    </div>
</template>


<script>
export default {
  name: 'form-wizard',
  props: {
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
  },
  
  data(){
    return{
        tabs: [],
        currentActive: 0,
        totalTabs: 0,
    }
   },
    created(){
        this.tabs = this.$children;
        
    },
    mounted(){
        this.totalTabs = this.tabs.length;
    },
    methods:{
        previousTab(){
            this.currentActive--;
            this.tabs.forEach(tab => {
                tab.isActive = false;
            });
                this.tabs[this.currentActive].isActive = true;
        },
        nextTab(){
            this.$root.$validator.validate('step'+(this.currentActive+ 1)+'.*').then(valid => {
                if (valid){
                    this.currentActive++;
                    this.tabs.forEach(tab => {
                        tab.isActive = false;
                    });
            
                    this.tabs[this.currentActive].isActive = true;
                }
            }); 
        }
      
    }
}
</script>