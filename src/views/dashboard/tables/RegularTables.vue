<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <div class="text-h5 font-weight-light text-center">
      <h1>Mornitering</h1>
    </div>
    <base-material-card
      icon="mdi-clipboard-text"
      class="px-5 py-3"
    >
      <div class="input-group">
        <label for="from">From:</label>
        <input
          id="date"
          v-model="startDate"
          type="date"
          class="input input-date"
          :max="yeterday"
          :min="lastYear"
        >
        <!-- <select
          id="from"
          v-model="currencyCodeFrom"
          class="input input-currency"
        >
          <option
            v-for="currency in currenciesOptions"
            :key="currency.code"
            :value="currency.code"
          >
            {{ currency.code + " - " + currency.description }}
          </option>
        </select> -->

        <label for="to">To:</label>
        <!-- <select
          id="to"
          v-model="currencyCodeTo"
          class="input input-currency"
        >
          <option
            v-for="currency in currenciesOptions"
            :key="currency.code"
            :value="currency.code"
          >
            {{ currency.code + " - " + currency.description }}
          </option>
        </select> -->

        <label for="date">Initial date:</label>
        <input
          id="date"
          v-model="startDate"
          type="date"
          class="input input-date"
          :max="yeterday"
          :min="lastYear"
        >
        <button
          type="button"
          class="button"
          @click="handleGetCurrencyRates"
        >
          SHOW
        </button>
      </div>
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              ID
            </th>
            <th class="primary--text">
              Time
            </th>
            <th class="primary--text">
              ອຸນຫະພູມອາກາດ
            </th>
            <th class="primary--text">
              ຄວາມຊຸມ
            </th>
            <th class="primary--text">
              pH
            </th>
            <th class="primary--text">
              EC
            </th>
            <th class="primary--text">
              ອຸນຫະພູມນ້ຳ
            </th>
            <th class="text-right primary--text">
              ຄ່າແສງ
            </th>
          </tr>
        </thead>
        <tbody id="data_sensor_table">
          <tr>
            <td>1</td>
            <td>10-10-2021</td>
            <td>40</td>
            <td>90</td>
            <td>3</td>
            <td>4</td>
            <td>25</td>
            <td
              class="text-right"
            >
              1000
            </td>
          </tr>
        </tbody>
        <tbody id="data_sensor_table">
          <tr>
            <td>1</td>
            <td>10-10-2021</td>
            <td>40</td>
            <td>90</td>
            <td>3</td>
            <td>4</td>
            <td>25</td>
            <td
              class="text-right"
            >
              1000
            </td>
          </tr>
        </tbody><tbody id="data_sensor_table">
          <tr>
            <td>1</td>
            <td>10-10-2021</td>
            <td>40</td>
            <td>90</td>
            <td>3</td>
            <td>4</td>
            <td>25</td>
            <td
              class="text-right"
            >
              1000
            </td>
          </tr>
        </tbody><tbody id="data_sensor_table">
          <tr>
            <td>1</td>
            <td>10-10-2021</td>
            <td>40</td>
            <td>90</td>
            <td>3</td>
            <td>4</td>
            <td>25</td>
            <td
              class="text-right"
            >
              1000
            </td>
          </tr>
        </tbody>
        <tbody id="data_sensor_table">
          <tr>
            <td>1</td>
            <td>10-10-2021</td>
            <td>40</td>
            <td>90</td>
            <td>3</td>
            <td>4</td>
            <td>25</td>
            <td
              class="text-right"
            >
              1000
            </td>
          </tr>
        </tbody>
        <tbody id="data_sensor_table">
          <tr>
            <td>1</td>
            <td>10-10-2021</td>
            <td>40</td>
            <td>90</td>
            <td>3</td>
            <td>4</td>
            <td>25</td>
            <td
              class="text-right"
            >
              1000
            </td>
          </tr>
        </tbody>
        <tbody id="data_sensor_table">
          <tr>
            <td>1</td>
            <td>1-10-2021</td>
            <td>40</td>
            <td>90</td>
            <td>3</td>
            <td>4</td>
            <td>25</td>
            <td
              class="text-right"
            >
              1000
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
    <div class="py-3" />
    <!--
    <base-material-card
      color="success"
      dark
      icon="mdi-clipboard-plus"
      title="Table on Dark Background"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>City</th>
            <th class="text-right">
              Salary
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Dakota Rice</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td class="text-right">
              $36,738
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Minverva Hooper</td>
            <td>Curaçao</td>
            <td>Sinaas-Waas</td>
            <td class="text-right">
              $23,789
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Sage Rodriguez</td>
            <td>Netherlands</td>
            <td>Baileux</td>
            <td class="text-right">
              $56,142
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Philip Chaney</td>
            <td>Korea, South</td>
            <td>Overland Park</td>
            <td class="text-right">
              $38,735
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>Doris Greene</td>
            <td>Malawi</td>
            <td>Feldkirchen in Kärnten</td>
            <td class="text-right">
              $63,542
            </td>
          </tr>

          <tr>
            <td>6</td>
            <td>Mason Porter</td>
            <td>Chile</td>
            <td>Gloucester</td>
            <td class="text-right">
              $78,615
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
    -->
    <!-- <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-date-picker
          v-model="dates"
          range
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-text-field
          v-model="dateRangeText"
          label="Date range"
          prepend-icon="mdi-calendar"
          readonly
        />
        model: {{ dates }}
      </v-col>
    </v-row> -->
  </v-container>
</template>
<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
  export default {
    data () {
      return {
        stdNo: 0,
        fill: true,
        selectedGradient: gradients[4],
        gradients,
        padding: 8,
        radius: 10,
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        width: 2,
        chartdata: {
          '2021-05-13': 2,
          '2021-05-14': 4,
          '2021-05-15': 3,
          '2021-05-16': 6,
        },
        computed: {
          dateRangeText () {
            return this.dates.join(' ~ ')
          },
        },
        mounted () {
          this.AddItemToTableSensor()
        },
        methods: {
          AddItemToRowTableSensor (time, tempAir, humid, pH, eC, tempWater, light) {
            var tbody = document.getElementById('data_sensor_table')
            var trow = document.createElement('tr')
            var td1 = document.createElement('td')
            var td2 = document.createElement('td')
            var td3 = document.createElement('td')
            var td4 = document.createElement('td')
            var td5 = document.createElement('td')
            var td6 = document.createElement('td')
            var td7 = document.createElement('td')
            var td8 = document.createElement('td')
            td1.innerHTML = ++this.stdNo
            td2.innerHTML = time
            td3.innerHTML = tempAir
            td4.innerHTML = humid
            td5.innerHTML = pH
            td6.innerHTML = eC
            td7.innerHTML = tempWater
            td8.innerHTML = light
            trow.appendChild(td1)
            trow.appendChild(td2)
            trow.appendChild(td3)
            trow.appendChild(td4)
            trow.appendChild(td5)
            trow.appendChild(td6)
            trow.appendChild(td7)
            trow.appendChild(td8)
            tbody.appendChild(trow)
          },
          AddItemToTableSensor () {
            this.$store.getters.get_data_from_sensor.forEach(element => {
              this.AddItemToRowTableSensor(element.time, element.temp, element.humid, element.ph, element.ec, element.temp_water, element.light)
            })
          },
        },
      }
    },
  }
/*
  export default {
    data: () => ({
      stdNo: 0,
      fill: true,
      selectedGradient: gradients[4],
      gradients,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,
      computed: {
        dateRangeText () {
          return this.dates.join(' ~ ')
        },
      },
      mounted () {
        this.AddItemToTableSensor()
      },
      methods: {
        AddItemToRowTableSensor (time, tempAir, humid, pH, eC, tempWater, light) {
          var tbody = document.getElementById('data_sensor_table')
          var trow = document.createElement('tr')
          var td1 = document.createElement('td')
          var td2 = document.createElement('td')
          var td3 = document.createElement('td')
          var td4 = document.createElement('td')
          var td5 = document.createElement('td')
          var td6 = document.createElement('td')
          var td7 = document.createElement('td')
          var td8 = document.createElement('td')
          td1.innerHTML = ++this.stdNo
          td2.innerHTML = time
          td3.innerHTML = tempAir
          td4.innerHTML = humid
          td5.innerHTML = pH
          td6.innerHTML = eC
          td7.innerHTML = tempWater
          td8.innerHTML = light
          trow.appendChild(td1)
          trow.appendChild(td2)
          trow.appendChild(td3)
          trow.appendChild(td4)
          trow.appendChild(td5)
          trow.appendChild(td6)
          trow.appendChild(td7)
          trow.appendChild(td8)
          tbody.appendChild(trow)
        },
        AddItemToTableSensor () {
          this.$store.getters.get_data_from_sensor.forEach(element => {
            this.AddItemToRowTableSensor(element.time, element.temp, element.humid, element.ph, element.ec, element.temp_water, element.light)
          })
        },
      },
    }),
  }
  */
  // window.onload = this.AddItemToTableSensor
</script>
<style scoped lang="scss">
.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
  padding: 0 1rem;
  color: #2c3e50;

  > .input {
    width: 100%;
    margin: 1rem;
    margin-top: 0.5rem;
    height: 3rem;
    font-size: 1.2rem;
    padding: 0 0.5rem;
    border: #2c3e50 solid 2px;
    &.input-currency {
      max-width: 500px;
    }
    &.input-date {
      max-width: 200px;
      text-align: center;
    }
  }

  > .button {
    width: 100%;
    max-width: 200px;
    margin: 1rem;
    height: 3rem;
    padding: 0 0.5rem;
    font-weight: bold;
    color: #ffff;
    background-color: #42b983;
    border: #2c3e50 solid 2px;
    transition: filter ease 200ms;
    &:hover {
      filter: brightness(110%);
    }
  }
}
</style>
