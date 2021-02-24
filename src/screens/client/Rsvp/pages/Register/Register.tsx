import React, { useState } from 'react'
import styled from 'styled-components';
import cuid from 'cuid';
import Cookies from 'js-cookie';

import useInvation from '../../../../../hooks/useInvation';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_RSVP } from '../../../../../graghql/rsvp';

import { rsvp_cookie, shower_time_until, shower_location, shower_location_link, shower_full_date } from '../../../../../utils/constants/app';
import { xIcon } from '../../../../../assets/icons/widgets';
import { messageValidator, nameValidator, phoneValidator } from '../../../../../utils/validators';
// items
import { Input, FormButton, ErrMsg } from '../../../../../components/form'

export default () => {
  const { setInvationActive } = useInvation()
  const { register, handleSubmit, errors, reset } = useForm();

  const [guest, setGuests] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handleAdd = () => {
    const newArr = [...guest, cuid()]
    setGuests(newArr)
  }

  const handleRm = (index: number) => {
    let arr = guest
    const newArr = arr.filter(a => a !== index).sort()
    setGuests(newArr)
  }

  const [createMessage] = useMutation(CREATE_RSVP, {
    onCompleted: (data) => handleCompleted(data.insert_rsvp),
    onError: () => {
      console.error('Error submitting contact form')
      setLoading(false)
    }
  });

  const submit = (d: any) => {
    setLoading(true)

    let people = []
    for (let i = 1; i <= 6; i++) {
      if (d[`person${i}`]) {
        let person = `"${d[`person${i}`].toLowerCase()}"`
        people.push(person)
      }
    }

    createMessage({
      variables: {
        houshold: d.household_name.toLowerCase(),
        head: d.head_of_household.toLowerCase(),
        phone: d.phone.toLowerCase(),
        people: `{${people.toString()}}`,
        message: d.message.toLowerCase()
      }
    })
  }

  const handleCompleted = (data: any) => {
    window.scrollTo(0, 0)
    Cookies.set(rsvp_cookie, data.returning[0].id);
    reset()
    setLoading(false)
    setInvationActive(true)
  }

  return (
    <Container>
      <div className="rsvp-head">
        <ul>
          <li>
            <span>Date: <span className="theme">{shower_full_date}</span></span>
            <br />
            <span>{shower_time_until}</span>
          </li>
          <li>
            <a href={shower_location_link} target="_blank" rel="noopener noreferrer">
              <span>Location: <span className="theme">{shower_location}</span></span>
            </a>
          </li>
          <li>Register up to <span className="theme">6 guests</span> (per household).</li>
          <li>Registration <span className="warn">CAN NOT</span> be changed, please fill with accuracy.</li>
        </ul>
      </div>
      <form action="POST" onSubmit={handleSubmit(submit)}>
        <div>
          <Input
            element='input'
            name='Household name'
            placeholder="Darbeh family"
            refs={register(nameValidator)}
          />
          {errors.household_name && <ErrMsg msg={'Household must be 2-25 characters'} />}
        </div>
        <div>
          <Input
            element='input'
            name='Head of household'
            placeholder="Sam Darbeh"
            refs={register(nameValidator)}
          />
          {errors.head_of_household && <ErrMsg msg={'Name must be 2-25 characters'} />}
        </div>
        {guest.map((p: number, i) => (
          <div className="added-person" key={p}>
            <button
              className="added-rm"
              type="button"
              onClick={() => handleRm(p)}>
              {xIcon}</button>
            <div>
              <Input
                element='input'
                displayName={`Guest ${i + 1} name`}
                name={`Person${i + 1}`}
                refs={register(nameValidator)}
              />
              {errors[`person_${i + 1}_name`] && <ErrMsg msg={'Name must be 2-25 characters'} />}
            </div>
          </div>
        ))}
        <div>
          <Input
            element='input'
            name='phone'
            placeholder="1234567890"
            refs={register(phoneValidator)}
          />
          {errors.phone && <ErrMsg msg={'Please enter a valid phone number'} />}
        </div>
        <div>
          <Input
            displayName="Message to our family (optional)"
            element='textarea'
            name='Message'
            refs={register(messageValidator)}
          />
        </div>
        <div className="form-btns">
          {guest.length <= 5 && (
            <button className="add-btn" type="button" onClick={handleAdd}>Add Guest</button>
          )}
          <div className="form-btn">
            <FormButton
              text="REGISTER"
              loading={loading}
            />
          </div>
        </div>
      </form>
    </Container>
  )
}

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  div.rsvp-head {
    border: 2px solid ${p => p.theme.currentThemeColorHover};
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 50px;
    ul {
      font-size: ${props => props.theme.fontSize.small};
      opacity: .7;
      display: grid;
      row-gap: 10px;
    }
    li {
      position: relative;
      padding-left: 18px;
      &::before {
        border: 2px solid;
        content: "";
        position: absolute;
        left: 0px;
        top: 30%;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        opacity: .3;
      }
    }
    button {
      display: block;
    }
    span.theme {
      color: ${p => p.theme.currentThemeColor};
      font-weight: 700;
    }
    span.warn {
      color: ${p => p.theme.globalColors.warn};
      text-decoration: underline;
    }
  }
  form {
    display: grid;
    row-gap: 25px;
  }
  div.added-person {
    display: grid;
    grid-template-columns: 30px 1fr;
    column-gap: 10px;
    margin-left: 20px;
    .added-rm {
      color: ${p => p.theme.bravo};
      justify-content: flex-start;
      transition: .2s ease-in;
      height: 60px;
      &:hover {
        color: ${p => p.theme.globalColors.warn};
      }
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
  div.form-btns {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .add-btn {

  }
  div.form-btn {
    color: ${p => p.theme.globalColors.black};
    width: 185px;
    margin: 0 0 0 auto;
  }
`