<template>
  <div>
    <TheHeader />
    <main id="index-page">
      <div class="container">
        <div class="navigate-menu">
          <ul class="nav nav-pills" id="pills-tab" role="tablist">
            <div class="row">
              <div class="col-lg-3">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-list"
                    type="button" role="tab" aria-controls="pills-home" aria-selected="true">LIST BOOK</button>
                </li>
              </div>
              <div class="col-lg-3">
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                    type="button" role="tab" aria-controls="pills-home" aria-selected="true">REGISTER BOOK</button>
                </li>
              </div>
            </div>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-list" role="tabpanel" aria-labelledby="pills-home-tab"
              tabindex="0">
              <ListView />
            </div>
            <div class="tab-pane fade show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
              tabindex="0">
              <CreateForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped src="../assets/css/home.css"></style>