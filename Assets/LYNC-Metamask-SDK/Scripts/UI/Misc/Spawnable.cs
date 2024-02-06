using System.Collections;
using UnityEngine;
using UnityEngine.Pool;

public abstract class Spawnable<T> : MonoBehaviour where T : class
{
    public bool IsActive { get; private set; }
    private ObjectPool<T> pool = null;

    protected virtual void OnEnable()
    {
        IsActive = true;
    }


    public void SetPool(ObjectPool<T> pool)
    {
        if (this.pool != null) return;
        this.pool = pool;
    }

    public virtual void Disable(float delay = 0f)
    {
        IEnumerator DisableInternal()
        {
            yield return new WaitForSeconds(delay);
            if (gameObject.activeSelf)
            {
                pool?.Release(this as T);
            }
            gameObject.SetActive(false);
        }

        IsActive = false;
        StartCoroutine(DisableInternal());
    }

}


public class SpawnableCollidable<T> : Spawnable<T>  where T: class
{
    protected virtual void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Pool Restorer"))
        {
            Disable();
        }
    }
}
