const handlers = require("../handlers")

//описание каждого теста, в данном случае нам нужно удостовериться, что домашняя страница отображается.
test("home page renders", ()=>{
    const req = {} // объект запроса
    const res= {render: jest.fn()} // объект ответа, создается обоб­щенная функция-заглушка, которая отслеживает то, как вызывается render.
    handlers.home(req, res)
    expect(res.render.mock.calls[0][0]).toBe("home") // утверждение
})
test("Contact renders", ()=>{
    const req = {} // объект запроса
    const res= {render: jest.fn()} // объект ответа, создается обоб­щенная функция-заглушка, которая отслеживает то, как вызывается render.
    handlers.contact(req, res)
    expect(res.render.mock.calls[0][0]).toBe("contact") // утверждение
})

test("страница о нас отображается с предсказанием", ()=>{
    const req = {} // объект запроса
    const res= {render: jest.fn()} // объект ответа, создается обоб­щенная функция-заглушка, которая отслеживает то, как вызывается render.
    handlers.about(req, res)
    expect(res.render.mock.calls.length).toBe(1) // утверждение
    expect(res.render.mock.calls[0][0]).toBe('about') // утверждение
    expect(res.render.mock.calls[0][1])
        .toEqual(expect.objectContaining({
            fortune: expect.stringMatching(/\W/)
        }))
})
test("Обработчик ошибки 404", ()=>{
    const req = {} // объект запроса
    const res= {render: jest.fn()} // объект ответа, создается обоб­щенная функция-заглушка, которая отслеживает то, как вызывается render.
    handlers.notFound(req, res)
    expect(res.render.mock.calls.length).toBe(1) // утверждение
    expect(res.render.mock.calls[0][0]).toBe('404') // утверждение
    
})
test("Обработчик ошибки 500", ()=>{
    const err = new Error("some error")
    const req = {} // объект запроса
    const next = jest.fn() // функция заглушка
    const res= {render: jest.fn()} // объект ответа, создается обоб­щенная функция-заглушка, которая отслеживает то, как вызывается render.
    handlers.servererror(err, req, res, next)
    expect(res.render.mock.calls.length).toBe(1) // утверждение
    expect(res.render.mock.calls[0][0]).toBe('500') // утверждение
})