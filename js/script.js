const form = document.querySelector(".form");
const containerMain = document.querySelector(".aside__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("email: ", e.target[0].value);
  const email = e.target[0].value;
  console.log("discord:", e.target[1].value);
  const discord = e.target[1].value;
  sendInfo(email, discord);
});

const sendInfo = async (email, discord) => {
  const res = await axios
    .get("https://larnu-api-upy5mhs63a-rj.a.run.app/api/v1/bootcamp/profile", {
      headers: {
        Email: email,
        "Discord-id": discord,
      },
    })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      alert("Mail or discord does not exist");
    });
  console.log(res?.data);
  if (res?.data !== undefined) {
    getCard(res.data);
  } else {
    console.log("Mail or discord does not exist");
  }
};

const getCard = async (data) => {
  console.log(data);

  containerMain.innerHTML = `
  
<div class="aside__form-card__info">
  <img src="https://i.pravatar.cc/300" alt="avatar" />
  <div class="info-content">
    <div class="info-description">
    <div class="star-field">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
    </div>
      <p>Full Name</p>
      <p>${data.user.fullName}</p>
    </div>
    <div class="info-description">
      <p>Email</p>
      <p>${data.user.email}</p>
    </div>
    <div class="info-description">
      <p>hobbies</p>
      <p>${data.hobbies}</p>
    </div>
    <div class="info-description">
      <p>Level</p>
      <p>${data.level}_Intergalatic</p>
    </div>
    <div class="info-description">
      <p>Discord Nick</p>
      <p>${data.discordUsername}_ellisvelandia#0060</p>
    </div>
    <button class="card__button" id="returnButton"
    onclick="location.reload()">Come Back</button>
  </div>
</div>
</div>
  `;
};

// paswword 490371137608482816
// email : eyis619@gmail.com
