"use client"
import { json } from 'node:stream/consumers';
import { useEffect, useState } from 'react';

export const useCountriesStates = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoadingCountries(true);
      try {
        const res = await fetch('https://countriesnow.space/api/v0.1/countries/iso');
        const json = await res.json();
        const names = json.data.map((c: any) => c.name);
        setCountries(names);
      } catch (err) {
        console.error('Failed to fetch countries', err);
       
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const fetchStates = async (country: string) => {
    setLoadingStates(true);
    try {
      const res = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ country }),
      });
      const json = await res.json();
      const stateNames = json.data.states.map((s: any) => s.name);
      setStates(stateNames);
    } catch (err) {
      console.error('Failed to fetch states', err);
    } finally {
      setLoadingStates(false);
    }
  };

 
  

  return {
    countries,
    states,
    loadingCountries,
    loadingStates,
    fetchStates,
  };
};
