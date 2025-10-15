const rooms = [
  {
    id:"dlx1",
    name:"PHÒNG DELUXE",
    type:"deluxe", price:2000000, capacity:2, size:36,
    image:"../images/rooms/deluxe.webp",
    desc:"Phòng Deluxe 36m² sáng sủa, rộng rãi, view công viên/ thành phố. Wifi, minibar, trà/cà phê và ấm đun. Phòng tắm 6m² có bồn tắm và thiết bị vệ sinh tự động."
  },
  {
    id:"gdx1",
    name:"PHÒNG GRAND DELUXE",
    type:"grand-deluxe", price:2400000, capacity:2, size:36,
    image:"../images/rooms/grand-deluxe.webp",
    desc:"Grand Deluxe 36m² nâng cấp hiện đại, sofa cạnh cửa sổ. Wifi, minibar, trà/cà phê, điều hòa, TV LCD. Tắm 6m² có bồn tắm và thiết bị vệ sinh tự động."
  },
  {
    id:"pmq1",
    name:"PHÒNG PREMIER QUAD",
    type:"premier-quad", price:2600000, capacity:4, size:36,
    image:"../images/rooms/premier-quad.webp",
    desc:"Premier Quad 36m² cho tối đa 4 khách. Wifi, minibar, TV thông minh, trà/cà phê, ấm đun. Tắm 6m² có bồn tắm và thiết bị vệ sinh tự động."
  },
  {
    id:"exe1",
    name:"PHÒNG EXECUTIVE",
    type:"executive", price:3200000, capacity:2, size:36,
    image:"../images/rooms/executive.webp",
    desc:"Executive 36m² tầng cao (14–16), view đẹp. Nội thất sang trọng, wifi, minibar, trà/cà phê, TV LCD; tắm có bồn, vòi sen riêng, thiết bị vệ sinh tự động."
  },
  {
    id:"pkex1",
    name:"PHÒNG PARK VIEW EXECUTIVE",
    type:"park-executive", price:4200000, capacity:2, size:48,
    image:"../images/rooms/park-executive.webp",
    desc:"Park View Executive 48m², 2 cửa sổ nhìn công viên/thành phố. Sofa, minibar, wifi, TV LCD; tắm 7,3m² có bồn và vòi sen riêng, thiết bị vệ sinh tự động."
  },
  {
    id:"exs1",
    name:"PHÒNG EXECUTIVE SUITE",
    type:"executive-suite", price:5600000, capacity:3, size:75,
    image:"../images/rooms/executive-suite.webp",
    desc:"Executive Suite 75m² gồm phòng khách riêng. Wifi, minibar, trà/cà phê, TV LCD; tắm 11m² có bồn và buồng tắm riêng, thiết bị vệ sinh tự động."
  },
  {
    id:"prs1",
    name:"PRESIDENTIAL SUITE",
    type:"presidential-suite", price:12000000, capacity:4, size:123,
    image:"../images/rooms/presidential-suite.webp",
    desc:"Presidential Suite 123m²: phòng ngủ, khách, bếp, ăn riêng. Wifi, minibar, máy pha cà phê, TV đôi; tắm có bồn, buồng tắm riêng, thiết bị vệ sinh tự động."
  }
];

const grid     = document.getElementById("rooms-grid");
const elPrice  = document.getElementById("f-maxprice");
const elGuests = document.getElementById("f-guests");
const elType   = document.getElementById("f-type");
const btnReset = document.getElementById("f-reset");

function applyFilters(){
  const maxPrice = elPrice.value.trim() === "" ? Infinity : Number(elPrice.value);
  const guests   = elGuests.value.trim() === "" ? 0 : Number(elGuests.value);
  const type     = elType.value;

  const list = rooms.filter(r=>{
    if (r.price > maxPrice) return false;
    if (guests && r.capacity < guests) return false;
    if (type && r.type !== type) return false;
    return true;
  });

  render(list);
}

function render(list){
  grid.innerHTML = list.map(r => `
    <article class="room-card">
      <img class="room-card__img" src="${r.image}" alt="${r.name}" loading="lazy">
      <h4 class="room-card__name">${r.name}</h4>
      <p class="room-card__desc">${r.desc}</p>
      <button class="btn btn--primary room-card__btn" data-id="${r.id}">ĐẶT PHÒNG</button>
    </article>
  `).join("");

  grid.querySelectorAll(".room-card__btn").forEach(btn=>{
    btn.addEventListener("click", e=>{
      const id = e.currentTarget.dataset.id;
      const room = rooms.find(x=>x.id===id);
      alert(`Bạn chọn: ${room.name}`);
    });
  });
}

function resetFilters(){
  elPrice.value = "";
  elGuests.value = "";
  elType.value = "";
  applyFilters();
}

[elPrice, elGuests].forEach(el => el.addEventListener("input", applyFilters));
elType.addEventListener("change", applyFilters);
btnReset.addEventListener("click", resetFilters);

render(rooms);
