import React, { Component, PropTypes } from 'react'
import { Creatable } from 'react-select'
import ReactDOM from 'react-dom'
import VirtualizedSelect from 'react-virtualized-select'
var cityData=  [
  { name: 'Abilene' },
  { name: 'Addison' },
  { name: 'Akron' },
  { name: 'Alameda' },
  { name: 'Albany' },
  { name: 'Albany' },
  { name: 'Albany' },
  { name: 'Albuquerque' },
  { name: 'Alexandria' },
  { name: 'Alexandria' },
  { name: 'Alhambra' },
  { name: 'Aliso Viejo' },
  { name: 'Allen' },
  { name: 'Allentown' },
  { name: 'Alpharetta' },
  { name: 'Altamonte Springs' },
  { name: 'Altoona' },
  { name: 'Amarillo' },
  { name: 'Ames' },
  { name: 'Anaheim' },
  { name: 'Anchorage' },
  { name: 'Anderson' },
  { name: 'Ankeny' },
  { name: 'Ann Arbor' },
  { name: 'Annapolis' },
  { name: 'Antioch' },
  { name: 'Apache Junction' },
  { name: 'Apex' },
  { name: 'Apopka' },
  { name: 'Apple Valley' },
  { name: 'Apple Valley' },
  { name: 'Appleton' },
  { name: 'Arcadia' },
  { name: 'Arlington' },
  { name: 'Arlington Heights' },
  { name: 'Arvada' },
  { name: 'Asheville' },
  { name: 'Athens-Clarke County' },
  { name: 'Atlanta' },
  { name: 'Atlantic City' },
  { name: 'Attleboro' },
  { name: 'Auburn' },
  { name: 'Auburn' },
  { name: 'Augusta-Richmond County' },
  { name: 'Aurora' },
  { name: 'Aurora' },
  { name: 'Austin' },
  { name: 'Aventura' },
  { name: 'Avondale' },
  { name: 'Azusa' },
  { name: 'Bakersfield' },
  { name: 'Baldwin Park' },
  { name: 'Baltimore' },
  { name: 'Barnstable Town' },
  { name: 'Bartlett' },
  { name: 'Bartlett' },
  { name: 'Baton Rouge' },
  { name: 'Battle Creek' },
  { name: 'Bayonne' },
  { name: 'Baytown' },
  { name: 'Beaumont' },
  { name: 'Beaumont' },
  { name: 'Beavercreek' },
  { name: 'Beaverton' },
  { name: 'Bedford' },
  { name: 'Bell Gardens' },
  { name: 'Belleville' },
  { name: 'Bellevue' },
  { name: 'Bellevue' },
  { name: 'Bellflower' },
  { name: 'Bellingham' },
  { name: 'Beloit' },
  { name: 'Bend' },
  { name: 'Bentonville' },
  { name: 'Berkeley' },
  { name: 'Berwyn' },
  { name: 'Bethlehem' },
  { name: 'Beverly' },
  { name: 'Billings' },
  { name: 'Biloxi' },
  { name: 'Binghamton' },
  { name: 'Birmingham' },
  { name: 'Bismarck' },
  { name: 'Blacksburg' },
  { name: 'Blaine' },
  { name: 'Bloomington' },
  { name: 'Bloomington' },
  { name: 'Bloomington' },
  { name: 'Blue Springs' },
  { name: 'Boca Raton' },
  { name: 'Boise City' },
  { name: 'Bolingbrook' },
  { name: 'Bonita Springs' },
  { name: 'Bossier City' },
  { name: 'Boston' },
  { name: 'Boulder' },
  { name: 'Bountiful' },
  { name: 'Bowie' },
  { name: 'Bowling Green' },
  { name: 'Boynton Beach' },
  { name: 'Bozeman' },
  { name: 'Bradenton' },
  { name: 'Brea' },
  { name: 'Bremerton' },
  { name: 'Brentwood' },
  { name: 'Brentwood' },
  { name: 'Bridgeport' },
  { name: 'Bristol' },
  { name: 'Brockton' },
  { name: 'Broken Arrow' },
  { name: 'Brookfield' },
  { name: 'Brookhaven' },
  { name: 'Brooklyn Park' },
  { name: 'Broomfield' },
  { name: 'Brownsville' },
  { name: 'Bryan' },
  { name: 'Buckeye' },
  { name: 'Buena Park' },
  { name: 'Buffalo' },
  { name: 'Buffalo Grove' },
  { name: 'Bullhead City' },
  { name: 'Burbank' },
  { name: 'Burien' },
  { name: 'Burleson' },
  { name: 'Burlington' },
  { name: 'Burlington' },
  { name: 'Burnsville' },
  { name: 'Caldwell' },
  { name: 'Calexico' },
  { name: 'Calumet City' },
  { name: 'Camarillo' },
  { name: 'Cambridge' },
  { name: 'Camden' },
  { name: 'Campbell' },
  { name: 'Canton' },
  { name: 'Cape Coral' },
  { name: 'Cape Girardeau' },
  { name: 'Carlsbad' },
  { name: 'Carmel' },
  { name: 'Carol Stream' },
  { name: 'Carpentersville' },
  { name: 'Carrollton' },
  { name: 'Carson' },
  { name: 'Carson City' },
  { name: 'Cary' },
  { name: 'Casa Grande' },
  { name: 'Casper' },
  { name: 'Castle Rock' },
  { name: 'Cathedral City' },
  { name: 'Cedar Falls' },
  { name: 'Cedar Hill' },
  { name: 'Cedar Park' },
  { name: 'Cedar Rapids' },
  { name: 'Centennial' },
  { name: 'Ceres' },
  { name: 'Cerritos' },
  { name: 'Champaign' },
  { name: 'Chandler' },
  { name: 'Chapel Hill' },
  { name: 'Charleston' },
  { name: 'Charleston' },
  { name: 'Charlotte' },
  { name: 'Charlottesville' },
  { name: 'Chattanooga' },
  { name: 'Chelsea' },
  { name: 'Chesapeake' },
  { name: 'Chesterfield' },
  { name: 'Cheyenne' },
  { name: 'Chicago' },
  { name: 'Chico' },
  { name: 'Chicopee' },
  { name: 'Chino' },
  { name: 'Chino Hills' },
  { name: 'Chula Vista' },
  { name: 'Cicero' },
  { name: 'Cincinnati' },
  { name: 'Citrus Heights' },
  { name: 'Clarksville' },
  { name: 'Clearwater' },
  { name: 'Cleveland' },
  { name: 'Cleveland' },
  { name: 'Cleveland Heights' },
  { name: 'Clifton' },
  { name: 'Clovis' },
  { name: 'Clovis' },
  { name: 'Coachella' },
  { name: 'Coconut Creek' },
  { name: 'Coeur d\'Alene' },
  { name: 'College Station' },
  { name: 'Collierville' },
  { name: 'Colorado Springs' },
  { name: 'Colton' },
  { name: 'Columbia' }
];


export default class extends Component {
  render () {
    return (
      <div>
        <header>
          <h1 >
            React Virtualized Select
          </h1>

          <div >
            Enjoy drop-down menus powered by <a  href='https://github.com/JedWatson/react-select/'><strong>@JedWatson</strong>'s react-select</a> and
            efficient windowing brought to you by <a  href='https://github.com/bvaughn/react-virtualized/'><strong>@bvaughn</strong>'s react-virtualized</a>.
          </div>

          <div >
            Docs and code on <a  href='https://github.com/bvaughn/react-virtualized-select/'>GitHub</a>.
          </div>
        </header>

        <section >
          <VirtualizedSelectExample
            cityData={cityData}
          />
        </section>
      </div>
    )
  }
}





class VirtualizedSelectExample extends Component {
  static propTypes = {
    cityData: PropTypes.array.isRequired,
    countryData: PropTypes.array.isRequired,
    nameData: PropTypes.array.isRequired
  };

  constructor (props) {
    super(props)

    const creatableOptions = [
      { label: 'Blue', value: '#00F' },
      { label: 'Green', value: '#0F0' },
      { label: 'Red', value: '#F00' }
    ]

    this.state = {
      clearable: true,
      creatableOptions,
      disabled: false,
      githubUsers: [],
      multi: false,
      searchable: true,
      selectedCreatable: null,
      selectedCity: null
    }

  }

  render () {
    const { cityData, countryData, nameData } = this.props
    const { clearable, creatableOptions, disabled, githubUsers, multi, searchable, selectedCity, selectedCountry, selectedCreatable, selectedGithubUser, selectedName } = this.state

    return (
      <div>

        <VirtualizedSelect
          autofocus
          labelKey='name'
          multi={true}
          onChange={(selectedCity) =>{console.log(selectedCity); this.setState({ selectedCity })}}
          options={cityData}
          searchable={true}
          simpleValue
          value={this.state.selectedCity}
          valueKey='name'
        />

        <ul >
          <li>
            <label>
              <input
                defaultChecked={multi}
                name='multi'
                onChange={(event) => this.setState({ multi: event.target.checked })}
                type='checkbox'
              />
              Multi-select?
            </label>
          </li>
          <li>
            <label>
              <input
                defaultChecked={searchable}
                name='searchable'
                onChange={(event) => this.setState({ searchable: event.target.checked })}
                type='checkbox'
              />
              Searchable?
            </label>
          </li>
          <li>
            <label>
              <input
                defaultChecked={clearable}
                name='clearable'
                onChange={(event) => this.setState({ clearable: event.target.checked })}
                type='checkbox'
              />
              Clearable?
            </label>
          </li>
          <li>
            <label>
              <input
                defaultChecked={disabled}
                name='disabled'
                onChange={(event) => this.setState({ disabled: event.target.checked })}
                type='checkbox'
              />
              Disabled?
            </label>
          </li>
        </ul>

        <h4 >
          Custom Option Renderer
        </h4>

        <div >
          Displays a list of world countries using a custom option renderer.
        </div>

        <VirtualizedSelect
          labelKey='name'
          onChange={(selectedCountry) => this.setState({ selectedCountry })}
          optionRenderer={CountryOptionRenderer}
          optionHeight={40}
          options={countryData}
          simpleValue
          value={selectedCountry}
          valueKey='code'
        />

        <h4 >
          Dynamic Height Options
        </h4>

        <div >
          Displays option-group headers that are sized different than regular options.
          Demonstrates how to use dynamic option heights feature.
        </div>

        <VirtualizedSelect
          labelKey='name'
          onChange={(selectedName) => this.setState({ selectedName })}
          onInputChange={() => this._customOptionHeightsSelect && this._customOptionHeightsSelect.recomputeOptionHeights()}
          optionHeight={({ option }) => option.type === 'header' ? 25 : 35}
          optionRenderer={NameOptionRenderer}
          options={nameData}
          ref={(ref) => this._customOptionHeightsSelect = ref}
          searchable={searchable}
          simpleValue
          value={selectedName}
          valueKey='name'
        />

        <h4 >
          Async Options
        </h4>

        <div >
          Displays an async <code>Select</code> component wired up to search for Github users.
        </div>

        <VirtualizedSelect
          async
          backspaceRemoves={false}
          labelKey='login'
          loadOptions={this._loadGithubUsers}
          minimumInput={1}
          onChange={(selectedGithubUser) => this.setState({ selectedGithubUser })}
          onValueClick={this._goToGithubUser}
          options={githubUsers}
          value={selectedGithubUser}
          valueKey='id'
        />

        <h4 >
          Creatable Options
        </h4>

        <div >
          Displays a <code>Select.Creatable</code> component that enables users to create their own options.
        </div>

        <VirtualizedSelect
          labelKey='label'
          multi
          onChange={(selectedCreatable) =>{console.log(selectedCreatable); this.setState({ selectedCreatable })}}
          optionHeight={40}
          options={creatableOptions}
          selectComponent={Creatable}
          simpleValue
          value={selectedCreatable}
          valueKey='value'
        />
      </div>
    )
  }

  _goToGithubUser (value) {
    window.open(value.html_url)
  }

  _loadGithubUsers (input) {
    return fetch(`https://api.github.com/search/users?q=${input}`)
      .then((response) => response.json())
      .then((json) => {
        const githubUsers = json.items

        this.setState({ githubUsers })

        return { options: githubUsers }
      })
  }
}

function CountryOptionRenderer ({ focusedOption, focusedOptionIndex, focusOption, key, labelKey, option, options, selectValue, style, valueArray }) {
  const flagImageUrl = `https://rawgit.com/hjnilsson/country-flags/master/svg/${option.code.toLowerCase()}.svg`

  const classNames = [styles.countryOption]
  if (option === focusedOption) {
    classNames.push(styles.countryOptionFocused)
  }
  if (valueArray.indexOf(option) >= 0) {
    classNames.push(styles.countryOptionSelected)
  }

  return (
    <div
      className={classNames.join(' ')}
      key={key}
      onClick={() => selectValue(option)}
      onMouseOver={() => focusOption(option)}
      style={style}
    >
      <label className={styles.countryLabel}>
        {option.name}
      </label>
      <img
        className={styles.countryFlag}
        src={flagImageUrl}
      />
    </div>
  )
}

function NameOptionRenderer ({ focusedOption, focusedOptionIndex, focusOption, key, labelKey, option, optionIndex, options, selectValue, style, valueArray }) {
  const classNames = [styles.nameOption]

  if (option.type === 'header') {
    classNames.push(styles.nameHeader)

    return (
      <div
        className={classNames.join(' ')}
        key={key}
        style={style}
      >
        {option.name}
      </div>
    )
  } else {
    if (option === focusedOption) {
      classNames.push(styles.nameOptionFocused)
    }
    if (valueArray.indexOf(option) >= 0) {
      classNames.push(styles.nameOptionSelected)
    }

    return (
      <div
        className={classNames.join(' ')}
        key={key}
        onClick={() => selectValue(option)}
        onMouseOver={() => focusOption(option)}
        style={style}
      >
        {option.name}
      </div>
    )
  }
}