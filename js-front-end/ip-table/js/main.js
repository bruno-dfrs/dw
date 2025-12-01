let last_ip_already_added = false

class IP {
  static ips = []

  constructor(ip, mask, version = '-') {
    this.ip = ip
    this.mask = mask
    this.version = version 
  }
  
  static isIPInList(ip_obj) {
    return IP.ips.some(ip_ips => ip_ips.ip === ip_obj.ip && ip_ips.mask === ip_obj.mask)
  }

  static addIP(ip) {
    if (!this.isIPInList(ip)) {
      IP.ips.push(ip)
      last_ip_already_added = false

    } else {
      last_ip_already_added = true
    }
  }

  static deleteIP(ip, mask) { //parametro sera uma manipulacao de string do id da td_ip e
    const ip_index = IP.ips.findIndex( ip_ips => ip_ips.ip == ip && ip_ips.mask == mask)
    delete IP.ips[ip_index]
  }
  // adicionar metodos de edição e delete depois
}

const ip_form = document.getElementById('ip-form')
const ip_input = document.getElementById('ip-input')
const mask_input = document.getElementById('mask-input')
const version_input = document.getElementById('version-input')
const table_body = document.getElementById('table-body')

function handleAddIP() {
  const ip = new IP(ip_input.value, mask_input.value, version_input.value)
  IP.addIP(ip)
}

function handleTable_new() {
  table_body.innerHTML = ''

  for (let i = 0; i < IP.ips.length; i++) {
    const tr = document.createElement('tr')
    tr.id = `tr-${i}`
    table_body.appendChild(tr)

    const current_tr = document.getElementById(`tr-${i}`)

    const td_ip = document.createElement('td')
    td_ip.id = `td-ip-${i}`
    td_ip.textContent = `${IP.ips[i].ip}`
    current_tr.appendChild(td_ip)
    console.log(`ID DO IP: ${td_ip.id}`)

    const td_mask = document.createElement('td')
    td_mask.id = `td-mask-${i}`
    td_mask.textContent = `${IP.ips[i].mask}`
    current_tr.appendChild(td_mask)
    console.log(`ID DA MASK: ${td_mask.id}`)

    const td_version = document.createElement('td')
    td_version.id = `td-version-${i}`
    td_version.textContent = `${IP.ips[i].version}`
    current_tr.appendChild(td_version)
    console.log(`ID DA VERSÃO: ${td_version.id}`)

    const td_icons = document.createElement('td')
    td_icons.id = `td-icons-${i}`
    current_tr.appendChild(td_icons)

    const edit_icon = document.createElement('img')
    edit_icon.id = `edit-${i}`
    edit_icon.src = 'imgs/edit.png'
    edit_icon.alt = 'Editar'
    edit_icon.width = 25
    edit_icon.height = 25
    td_icons.appendChild(edit_icon)

    const delete_icon = document.createElement('img')
    delete_icon.id = `edit-${i}`
    delete_icon.src = 'imgs/delete.png'
    delete_icon.alt = 'Deletar'
    delete_icon.width = 25
    delete_icon.height = 25
    td_icons.appendChild(delete_icon)

    console.log(`-----------------------FIM DO LOOP ${i}----------------------------`)
  }
}

function handleTable_old() {
  if (last_ip_already_added == false) {
    const n = IP.ips.length
    const tr = `<tr id="tr-${n}"></tr>`
    table_body.insertAdjacentHTML('afterbegin', tr)
    const last_tr = document.getElementById(`tr-${n}`)

    const td_ip = `<td id="td-${n}-ip">${IP.ips[n-1].ip}</td>`
    const td_mask = `<td id="td-${n}-mask">${IP.ips[n-1].mask}</td>`
    const td_version = `<td id="td-${n}-version">${IP.ips[n-1].version}</td>`

    last_tr.insertAdjacentHTML('beforeend', td_ip)
    last_tr.insertAdjacentHTML('beforeend', td_mask)
    last_tr.insertAdjacentHTML('beforeend', td_version)

  } else {
    // notify already added bootstrap
  }
}

ip_form.onsubmit = (event) => {
  event.preventDefault()
  handleAddIP()
  handleTable_new()

  ip_form.reset()
  ip_input.focus()

  //console.log(IP.ips)
}



// const teste_ip = new IP('10.0.0.1', '255.0.0.0', 'v4')
// IP.addIP(teste_ip)
// IP.addIP(teste_ip)

// const teste_ip2 = new IP('10.0.0.2', '255.0.0.0', 'v4')
// IP.addIP(teste_ip2)

// console.log(IP.ips)