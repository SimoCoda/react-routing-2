import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { UiInput } from '../components/ui/UiInput'
import { UiButton } from '../components/ui/UiButton'

const Search = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    const [form, setForm] = useState({
        search: searchParams.get("search"),
    })

    const handleSearch = () => {
        setSearchParams({search: form.search})
    }


    return (
        <div>
            <p>Search:</p>

            <div className="flex-1 flex flex-col min-h-0 border-l border-gray-200 bg-white mt-5 mb-5">
                <div className="bg-auto bg-blue-800 flex-1 flex flex-col p-4 overflow-auto">
                    <div className="text-white text-xs font-bold">
                        <pre>
                            <code>{JSON.stringify(form, undefined, 1)}</code>
                        </pre>
                    </div>
                </div>
            </div>

            <UiInput
                id="search"
                label="Cerca qualcosa"
                value={form.value}
                onChange={(e) => {
                    const val = e.target.value;
                    setForm({ ...form, search: val })
                }}
            />
            <div className='flex justify-end mt-5'>
                <UiButton
                    title="Cerca"
                    onClick={handleSearch}
                />
            </div>
        </div>
    )
}

export default Search