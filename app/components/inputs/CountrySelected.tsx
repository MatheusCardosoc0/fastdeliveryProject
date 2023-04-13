'use client'

import Select from "react-select"
import useCountries from "../../hooks/useCountries"

export type CountrySelectValue = {
  flag: string
  label: string
  latng: number[]
  region: string
  value: string
}

interface CountrySelecProps {
  value?: CountrySelectValue
  onChange: (value: CountrySelectValue) => void
}

const CountrySelected: React.FC<CountrySelecProps> = ({
  onChange,
  value
}) => {

  const { getAll } = useCountries()

  return (
    <div>
      <Select
        placeholder="Qualquer lugar"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatGroupLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label}
              <span className="text-neutral-800 ml-1">
                {option.region}
              </span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}

        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe56'
          }
        })}
      />
    </div>
  )
}

export default CountrySelected