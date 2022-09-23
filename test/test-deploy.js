const { ethers } = require("hardhat") // import ethers from hardhat
const { expect, assert } = require("chai")

// describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
    //let simpleStorageFactory
    //let simpleStorage
    let simpleStorageFactory, simplestorage // same as writting it each in one line

    beforeEach(async function () {
        // tells us what to do before each test "it"
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage") //
        simpleStorage = await simpleStorageFactory.deploy()
    })

    // "it" is the code to run the test
    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // with importing package "chai" we can use either keyword
        // assert
        // expect
        assert.equal(currentValue.toString(), expectedValue)
        // expect(currentValue.toString()).to.equal(expectedValue)
    })

    it("Should add a person with favorite number", async function () {
        const personName = "Michael Meier"
        const personFavoriteNumber = "3"
        const transactionResponse = await simpleStorage.addPerson(
            personName,
            personFavoriteNumber
        )
        await transactionResponse.wait(1)

        const person = await simpleStorage.people()
        assert.equal(person.name, personName)
        assert.equal(person.FavoriteNumber.toString(), personFavoriteNumber)
    })
})
