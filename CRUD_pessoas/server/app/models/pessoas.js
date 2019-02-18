module.exports = (sequelize, DataTypes) => {
    const pessoas = sequelize.define('pessoas', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        endereco: DataTypes.STRING,
        sexo: DataTypes.CHAR,
        idade: DataTypes.INTEGER,
        ativo: DataTypes.BOOLEAN,
    });

    return pessoas
}