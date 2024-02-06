using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class Toast : Spawnable<Toast>
{
    [SerializeField]
    private Image bg;
    [SerializeField]
    private TextMeshProUGUI message;
    [SerializeField]
    private Image icon;
    [SerializeField]
    private Sprite infoIcon, errorIcon, warningIcon, correctIcon;
    [SerializeField]
    private Color infoColor = Color.blue, errorColor = Color.red, warningColor = Color.yellow, correctColor = Color.green;
    [SerializeField]
    private Button closeButton;
    internal bool IsVisible { get; private set; }
    public RectTransform rectTransform { get; private set; }

    public event Action closeCallback;

    private void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        closeButton.onClick.AddListener(Hide);
    }

    protected override void OnEnable()
    {
        base.OnEnable();
        IsVisible = true;
    }

    public void Show(string message, ToastType type = ToastType.Info)
    {
        closeButton.interactable = true;
        this.message.text = message;
        switch (type)
        {
            case ToastType.Error:
                icon.sprite = errorIcon;
                bg.color = errorColor;
                break;
            case ToastType.Info:
                icon.sprite = infoIcon;
                bg.color = infoColor;
                break;
            case ToastType.Warning:
                icon.sprite = warningIcon;
                bg.color = warningColor;
                break;
            case ToastType.Success:
                icon.sprite = correctIcon;
                bg.color = correctColor;
                break;
        }
    }

    public void Hide()
    {
        IsVisible = false;
        closeButton.interactable = false;
        closeCallback?.Invoke();
        Disable();
    }

}
