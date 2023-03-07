import Modal from "../components/Modal"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

//mocks
const activeModalMock = {
    sprites: {
        front_default: "http://url.com"
    },
    id: "1",
    name: "pokemon",
    types: [
        {
            type: {
                name: "type1"
            }
        }
    ],
    weight: 90,
    height: 30
}

const closeModalMock = jest.fn()