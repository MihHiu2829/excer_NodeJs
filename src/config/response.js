const successCode = (res,mess,data) => {
    res.status(200).json({
        statusCode: 200,
        data: data,
        messager: mess,
        date: new Date()
    })
}
const errorCode = (res,mess,data) => {
    res.status(400).json({
        statusCode: 400,
        data: data,
        messager: mess,
        date: new Date()
    })
}
const failCode = (res,mess) => {
    today = new Date()
    // tuday = today.getDate()
    res.status(500).json({
        statusCode: 500,
        messager: mess,
        date: today
    })
}

module.exports = {successCode,errorCode,failCode}