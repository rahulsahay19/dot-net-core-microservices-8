namespace Catalog.Core.Repositories
{
    public interface ITypesRepository
    {
        Task<IEnumerable<Type>> GetAllTypes();
    }
}
