<template>
    <div class="container">
        <form>
            <div class="form-layout col-lg-6 mx-auto">
                <div class="title">
                    <h2>Login</h2>
                </div>
                <div class="form-group">
                    <label for="name">Nome</label>
                    <input class="form-control" type="text" placeholder="Nome" />
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'user']" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" type="text" placeholder="Email" />
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'user']" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input class="form-control" type="password" placeholder="Password" />
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirmação de Senha</label>
                    <input class="form-control" type="password" placeholder="Confirme Sua Senha" />
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                    </div>
                </div>
                <div class="form-group">
                    <button class="submit-form" type="submit">Cadastrar-se</button>
                </div>
            </div>
        </form>
    </div>
</template>




<style src="../assets/css/components/login-card.css"></style>