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
              <div class="col-lg-3">
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                    type="button" role="tab" aria-controls="pills-profile" aria-selected="false">DELETE BOOK</button>
                </li>
              </div>
              <div class="col-lg-3">
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#update-tab"
                    type="button" role="tab" aria-controls="update-tab" aria-selected="false">UPDATE BOOK</button>
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
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
              tabindex="0">
              <DeleteForm />
            </div>
            <div class="tab-pane fade" id="update-tab" role="tabpanel" aria-labelledby="update-tab" tabindex="0">
              <UpdateForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped src="../assets/css/home.css"></style>