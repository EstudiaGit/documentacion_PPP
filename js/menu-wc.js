'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">AstroRetos documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutPageModule.html" data-type="entity-link" >AboutPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AboutPageModule-457b8fdcae2cb5b374b7650200bbbe0d9ed1542b60ee89b3a379a68a37272e5745b1dc39028401f72312925542db167345838ab0fb4bc7582cc551f6b36b29f0"' : 'data-bs-target="#xs-components-links-module-AboutPageModule-457b8fdcae2cb5b374b7650200bbbe0d9ed1542b60ee89b3a379a68a37272e5745b1dc39028401f72312925542db167345838ab0fb4bc7582cc551f6b36b29f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutPageModule-457b8fdcae2cb5b374b7650200bbbe0d9ed1542b60ee89b3a379a68a37272e5745b1dc39028401f72312925542db167345838ab0fb4bc7582cc551f6b36b29f0"' :
                                            'id="xs-components-links-module-AboutPageModule-457b8fdcae2cb5b374b7650200bbbe0d9ed1542b60ee89b3a379a68a37272e5745b1dc39028401f72312925542db167345838ab0fb4bc7582cc551f6b36b29f0"' }>
                                            <li class="link">
                                                <a href="components/AboutPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutPageRoutingModule.html" data-type="entity-link" >AboutPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AdminPageModule.html" data-type="entity-link" >AdminPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminPageModule-c85f59c7465f7940f5e73ab3fffe97ca388de52723f8ebe2b671582d2094a3effc1d3352674532448efbf53644fc722ba223d9e184cdcca6e5357f8e503bbf68"' : 'data-bs-target="#xs-components-links-module-AdminPageModule-c85f59c7465f7940f5e73ab3fffe97ca388de52723f8ebe2b671582d2094a3effc1d3352674532448efbf53644fc722ba223d9e184cdcca6e5357f8e503bbf68"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminPageModule-c85f59c7465f7940f5e73ab3fffe97ca388de52723f8ebe2b671582d2094a3effc1d3352674532448efbf53644fc722ba223d9e184cdcca6e5357f8e503bbf68"' :
                                            'id="xs-components-links-module-AdminPageModule-c85f59c7465f7940f5e73ab3fffe97ca388de52723f8ebe2b671582d2094a3effc1d3352674532448efbf53644fc722ba223d9e184cdcca6e5357f8e503bbf68"' }>
                                            <li class="link">
                                                <a href="components/AdminPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminPageRoutingModule.html" data-type="entity-link" >AdminPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-f7fb15ecdd0aa2ea86ad95ad525b47ed4959defa11f6aa9df28b76badad6c9fa5e881d4c8726cf008e5eb3f6811a01a5c7f4081f10bdb6aff02f60e2cfa63cc2"' : 'data-bs-target="#xs-components-links-module-AppModule-f7fb15ecdd0aa2ea86ad95ad525b47ed4959defa11f6aa9df28b76badad6c9fa5e881d4c8726cf008e5eb3f6811a01a5c7f4081f10bdb6aff02f60e2cfa63cc2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f7fb15ecdd0aa2ea86ad95ad525b47ed4959defa11f6aa9df28b76badad6c9fa5e881d4c8726cf008e5eb3f6811a01a5c7f4081f10bdb6aff02f60e2cfa63cc2"' :
                                            'id="xs-components-links-module-AppModule-f7fb15ecdd0aa2ea86ad95ad525b47ed4959defa11f6aa9df28b76badad6c9fa5e881d4c8726cf008e5eb3f6811a01a5c7f4081f10bdb6aff02f60e2cfa63cc2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ComponentsModule-55f6f037f96bd21c10a23480a1569accf985f3f64219ace8cf580dfc6fe3fee0fb560c438436b05a605f9788ea934c7aec9373f72c35dd0650cb6cb3b153cd1a"' : 'data-bs-target="#xs-components-links-module-ComponentsModule-55f6f037f96bd21c10a23480a1569accf985f3f64219ace8cf580dfc6fe3fee0fb560c438436b05a605f9788ea934c7aec9373f72c35dd0650cb6cb3b153cd1a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-55f6f037f96bd21c10a23480a1569accf985f3f64219ace8cf580dfc6fe3fee0fb560c438436b05a605f9788ea934c7aec9373f72c35dd0650cb6cb3b153cd1a"' :
                                            'id="xs-components-links-module-ComponentsModule-55f6f037f96bd21c10a23480a1569accf985f3f64219ace8cf580dfc6fe3fee0fb560c438436b05a605f9788ea934c7aec9373f72c35dd0650cb6cb3b153cd1a"' }>
                                            <li class="link">
                                                <a href="components/FabLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FabLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoRetoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoRetoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRetoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRetoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoticiaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoticiaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoticiasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoticiasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RetoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RetoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RetosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RetosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritosPageModule.html" data-type="entity-link" >FavoritosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FavoritosPageModule-759dce9807eb7c32a460012b7eee831348753a23c26a39b2c10cb78cda651e8b5b4830c4ca9976ce6c4afa9d1fc6ca9a81f74cb0c7b0047f61aa8b65bcf13dc4"' : 'data-bs-target="#xs-components-links-module-FavoritosPageModule-759dce9807eb7c32a460012b7eee831348753a23c26a39b2c10cb78cda651e8b5b4830c4ca9976ce6c4afa9d1fc6ca9a81f74cb0c7b0047f61aa8b65bcf13dc4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavoritosPageModule-759dce9807eb7c32a460012b7eee831348753a23c26a39b2c10cb78cda651e8b5b4830c4ca9976ce6c4afa9d1fc6ca9a81f74cb0c7b0047f61aa8b65bcf13dc4"' :
                                            'id="xs-components-links-module-FavoritosPageModule-759dce9807eb7c32a460012b7eee831348753a23c26a39b2c10cb78cda651e8b5b4830c4ca9976ce6c4afa9d1fc6ca9a81f74cb0c7b0047f61aa8b65bcf13dc4"' }>
                                            <li class="link">
                                                <a href="components/FavoritosPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoritosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritosPageRoutingModule.html" data-type="entity-link" >FavoritosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomePageModule-6b6e662b105c1f408a01b5321ae746f79bd2f5080af04dc8c514b1069a742298c1baa5bbde819215ac2d1a5bca42d1372150d6e5c22ae0b4284599cf15ccb1c9"' : 'data-bs-target="#xs-components-links-module-HomePageModule-6b6e662b105c1f408a01b5321ae746f79bd2f5080af04dc8c514b1069a742298c1baa5bbde819215ac2d1a5bca42d1372150d6e5c22ae0b4284599cf15ccb1c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-6b6e662b105c1f408a01b5321ae746f79bd2f5080af04dc8c514b1069a742298c1baa5bbde819215ac2d1a5bca42d1372150d6e5c22ae0b4284599cf15ccb1c9"' :
                                            'id="xs-components-links-module-HomePageModule-6b6e662b105c1f408a01b5321ae746f79bd2f5080af04dc8c514b1069a742298c1baa5bbde819215ac2d1a5bca42d1372150d6e5c22ae0b4284599cf15ccb1c9"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MisRetosPageModule.html" data-type="entity-link" >MisRetosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MisRetosPageModule-faa5b1cebfe4611648c089a4d56413d09f6dcce3013ff62148efc22916dca88924d12e36e8a37331f32ec6c2db7570eca09c4dfd3d4afa7f264fa00bb371ea26"' : 'data-bs-target="#xs-components-links-module-MisRetosPageModule-faa5b1cebfe4611648c089a4d56413d09f6dcce3013ff62148efc22916dca88924d12e36e8a37331f32ec6c2db7570eca09c4dfd3d4afa7f264fa00bb371ea26"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MisRetosPageModule-faa5b1cebfe4611648c089a4d56413d09f6dcce3013ff62148efc22916dca88924d12e36e8a37331f32ec6c2db7570eca09c4dfd3d4afa7f264fa00bb371ea26"' :
                                            'id="xs-components-links-module-MisRetosPageModule-faa5b1cebfe4611648c089a4d56413d09f6dcce3013ff62148efc22916dca88924d12e36e8a37331f32ec6c2db7570eca09c4dfd3d4afa7f264fa00bb371ea26"' }>
                                            <li class="link">
                                                <a href="components/MisRetosPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MisRetosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MisRetosPageRoutingModule.html" data-type="entity-link" >MisRetosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NewsPagePageModule.html" data-type="entity-link" >NewsPagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NewsPagePageModule-9c0d69eda334763c23d8fd8dbd778044a7645f39ddba793f086e06ee0e12e5b59c9793efc5e9cf1c2befa0f90edb61fad0230b3c6ec2e6e9e39f6e7290e376e5"' : 'data-bs-target="#xs-components-links-module-NewsPagePageModule-9c0d69eda334763c23d8fd8dbd778044a7645f39ddba793f086e06ee0e12e5b59c9793efc5e9cf1c2befa0f90edb61fad0230b3c6ec2e6e9e39f6e7290e376e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewsPagePageModule-9c0d69eda334763c23d8fd8dbd778044a7645f39ddba793f086e06ee0e12e5b59c9793efc5e9cf1c2befa0f90edb61fad0230b3c6ec2e6e9e39f6e7290e376e5"' :
                                            'id="xs-components-links-module-NewsPagePageModule-9c0d69eda334763c23d8fd8dbd778044a7645f39ddba793f086e06ee0e12e5b59c9793efc5e9cf1c2befa0f90edb61fad0230b3c6ec2e6e9e39f6e7290e376e5"' }>
                                            <li class="link">
                                                <a href="components/NewsPagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsPagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewsPagePageRoutingModule.html" data-type="entity-link" >NewsPagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PerfilPageModule.html" data-type="entity-link" >PerfilPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PerfilPageModule-1512e9017761befe89ca4b309bfb005aa1912e26e47a0951c37e3b0770d4952193506c841c47cfe99ca9c2d50e0b3e33d6f5fb96c8b2db0b0253888b6b933e5e"' : 'data-bs-target="#xs-components-links-module-PerfilPageModule-1512e9017761befe89ca4b309bfb005aa1912e26e47a0951c37e3b0770d4952193506c841c47cfe99ca9c2d50e0b3e33d6f5fb96c8b2db0b0253888b6b933e5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PerfilPageModule-1512e9017761befe89ca4b309bfb005aa1912e26e47a0951c37e3b0770d4952193506c841c47cfe99ca9c2d50e0b3e33d6f5fb96c8b2db0b0253888b6b933e5e"' :
                                            'id="xs-components-links-module-PerfilPageModule-1512e9017761befe89ca4b309bfb005aa1912e26e47a0951c37e3b0770d4952193506c841c47cfe99ca9c2d50e0b3e33d6f5fb96c8b2db0b0253888b6b933e5e"' }>
                                            <li class="link">
                                                <a href="components/PerfilPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PerfilPageRoutingModule.html" data-type="entity-link" >PerfilPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RankingPageModule.html" data-type="entity-link" >RankingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RankingPageModule-9c27952fc74c7e7ebbc4238ced09ffb04c8c551e3fc736edd7b88956f42d05a41505003c0f1e6df9a1d3e4bf3bb850fef0e45edd0bef506bdf9dd6cadd17325e"' : 'data-bs-target="#xs-components-links-module-RankingPageModule-9c27952fc74c7e7ebbc4238ced09ffb04c8c551e3fc736edd7b88956f42d05a41505003c0f1e6df9a1d3e4bf3bb850fef0e45edd0bef506bdf9dd6cadd17325e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RankingPageModule-9c27952fc74c7e7ebbc4238ced09ffb04c8c551e3fc736edd7b88956f42d05a41505003c0f1e6df9a1d3e4bf3bb850fef0e45edd0bef506bdf9dd6cadd17325e"' :
                                            'id="xs-components-links-module-RankingPageModule-9c27952fc74c7e7ebbc4238ced09ffb04c8c551e3fc736edd7b88956f42d05a41505003c0f1e6df9a1d3e4bf3bb850fef0e45edd0bef506bdf9dd6cadd17325e"' }>
                                            <li class="link">
                                                <a href="components/RankingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RankingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RankingPageRoutingModule.html" data-type="entity-link" >RankingPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AvisosService.html" data-type="entity-link" >AvisosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MultimediaService.html" data-type="entity-link" >MultimediaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewsService.html" data-type="entity-link" >NewsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RetoService.html" data-type="entity-link" >RetoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Article.html" data-type="entity-link" >Article</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArticlesByCategoryAndPage.html" data-type="entity-link" >ArticlesByCategoryAndPage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Error.html" data-type="entity-link" >Error</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Favorito.html" data-type="entity-link" >Favorito</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuOpts.html" data-type="entity-link" >MenuOpts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewsResponse.html" data-type="entity-link" >NewsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reto.html" data-type="entity-link" >Reto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RetoConseguido.html" data-type="entity-link" >RetoConseguido</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Source.html" data-type="entity-link" >Source</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});