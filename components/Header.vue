<template>
    <header>
        <div class="container">
            <nav>
                <div class="logo">
                    <img src="../assets/imgs/logo.png" alt="">

                    <MobileDrawer/>
                </div>

                <ul>
                    <li class="default">
                        <NuxtLink to="/create">
                            Categorias
                        </NuxtLink>
                    </li>
                    <li class="create-method">
                        <NuxtLink to="/create">
                            Criar Novo Livro
                        </NuxtLink>
                    </li>
                    <li class="search">
                        <InputText type="text" placeholder="Pesquisar..."/>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped src="../assets/css/header.css"></style>