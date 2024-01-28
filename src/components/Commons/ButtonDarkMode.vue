<template>
    <div class="toggle-switch">
        <input type="checkbox" id="dark-mode-toggle" @change="toggleDarkMode" :checked="darkMode">
        <label for="dark-mode-toggle">
            <span class="toggle-track"></span>
            <span class="toggle-thumb"></span>
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false
        };
    },
    mounted() {
        this.initializeTheme();
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            this.applyDarkMode();
            this.saveThemePreference();
        },
        initializeTheme() {
            const savedTheme = localStorage.getItem('themePreference');
            if (savedTheme) {
                this.darkMode = savedTheme === 'dark';
            } else {
                // Use a preferência do sistema se nenhuma preferência estiver salva
                this.darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
            this.applyDarkMode();
        },
        applyDarkMode() {
            if (this.darkMode) {
                document.documentElement.classList.add('force-dark');
                document.documentElement.classList.remove('force-light');
            } else {
                document.documentElement.classList.add('force-light');
                document.documentElement.classList.remove('force-dark');
            }
        },
        saveThemePreference() {
            const preference = this.darkMode ? 'dark' : 'light';
            localStorage.setItem('themePreference', preference);
        }
    }
};

</script>

<style>

.toggle-switch {
    display: inline-block;
    position: relative;
}

.toggle-track {
    background-color: #ccc;
    border-radius: 15px;
    width: 50px;
    height: 25px;
    display: block;
}

.toggle-thumb {
    background-color: #fff;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    position: absolute;
    top: 1px;
    left: 1px;
    transition: all 0.3s ease;
}

input[type="checkbox"] {
    display: none;
}

input[type="checkbox"]:checked + label .toggle-thumb {
    transform: translateX(25px);
}

input[type="checkbox"]:checked + label .toggle-track {
    background-color: #666;
}
</style>