using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Pool;
using UnityEngine.UI;

public class ToastManager : SingletonMonoBehaviour<ToastManager>
{
    [SerializeField]
    private RectTransform toastSpawnPoint;
    [SerializeField, Min(0)]
    private float spacing = 50;
    private Canvas canvas;
    private RectTransform canvasTransform;
    [SerializeField]
    private Toast toastPrefab;
    [SerializeField, Range(0, 5)]
    private int stackLimit = 3;
    private ObjectPool<Toast> toastPool;
    private List<Toast> activeToasts = new List<Toast>();
    private float toastHeight;


    protected override void Awake()
    {
        base.Awake();
        canvas = GetComponentInParent<Canvas>();
        canvasTransform = (RectTransform)canvas.transform;

        toastHeight = toastPrefab.GetComponent<RectTransform>().sizeDelta.y;

        toastPool = new ObjectPool<Toast>(() =>
        {
            var spawnable = Instantiate(toastPrefab, canvasTransform);

            spawnable.SetPool(toastPool);

            return spawnable;
        }, actionOnGet: p => p.gameObject.SetActive(true), collectionCheck:true, actionOnDestroy: p => Destroy(p.gameObject), maxSize: 25);

    }


    private void Update()
    {
        if (activeToasts.Count > 0)
        {
            foreach (var item in activeToasts)
            {
                var r = item.rectTransform;
                Vector2 anchorPos = r.anchoredPosition;
                anchorPos.y = toastSpawnPoint.anchoredPosition.y - (toastHeight + spacing) * activeToasts.IndexOf(item) * canvas.scaleFactor;
                r.anchoredPosition = anchorPos;
            }
        }
    }


    public void Show(string message, ToastType type = ToastType.Info)
    {
        if (activeToasts.Count == stackLimit)
        {
            var firstActiveToast = activeToasts.FirstOrDefault();
            firstActiveToast.Hide();
            if (activeToasts.Contains(firstActiveToast)) activeToasts.Remove(firstActiveToast);
        }

        var toast = toastPool.Get();
        activeToasts.Add(toast);
        
        toast.Show(message, type);
        toast.closeCallback += () =>
        {
            activeToasts.Remove(toast);
        };
    }

}
