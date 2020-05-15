class Estor {
  constructor(data) {
    for (let field in data) {
      this[field] = data[field];
    }
    this.carModels = this.getCars(this.carMaker, this.type);
  }

  getCars(carMaker, type) {
    axios
      .post("/api/get_carmodels.api.php", {
        maker: carMaker,
        type: type
      })
      .then(response => {
        // console.log(response.data);
        this.carModels = response.data;
        this.selectedModel = this.carModels[0].value;
        if (type == "RI") {
          this.selectedPrice = this.carModels[0].price;
        }
        if (type == "RD") {
          this.getOptions();
        }
      })
      .catch(error => {
        alert("[E01] 오류가 발생했습니다. 고객센터로 문의해주시기 바랍니다.");
        console.log(error);
      });
  }

  getOptions(selectedModel) {
    let model = "";
    if (!selectedModel) {
      selectedModel = this.selectedModel;
    }
    axios
      .post("/api/get_caroptions.api.php", {
        model: selectedModel
      })
      .then(response => {
        if (response.data.result) {
          this.carInfo = response.data.car;
        } else {
          alert(response.data.msg);
        }
      })
      .catch(error => {
        alert("오류가 발생했습니다. 고객센터로 문의해주시기 바랍니다.");
        console.log(error);
      });
  }

  setRiPrice(target) {
    let idx = target.selectedIndex;
    let price = target.options[idx].getAttribute("price");
    this.selectedPrice = price;
  }

  toggleOption(option) {
    if (option.disabled) {
      alert("차량기본가는 해제할 수 없습니다.");
    } else {
      option.checked = !option.checked;
    }
  }
}

export default Estor;
