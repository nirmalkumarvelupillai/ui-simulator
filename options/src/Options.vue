<template>
  <div>
    <h1>Options</h1>
  </div>
</template>

<script>
export default {
    name: 'OptionsPage',
    components: {
    },
    data() {
        return {
            config: [],
        };
    },
    mounted() {
        chrome.storage.sync.get(['config'], this.setConfig);
    },
    methods: {
        setConfig(storage) {
            this.config = storage.config;
        },
        deleteEntry(index) {
            this.config.splice(index, 1);
            chrome.storage.sync.set(
                {
                    config: this.config,
                },
                null
            );
        },
        addEntry(entry) {
            this.config.push(entry);
            chrome.storage.sync.set(
                {
                    config: this.config,
                },
                null
            );
        },
    },
};
</script>