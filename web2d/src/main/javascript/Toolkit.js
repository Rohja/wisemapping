/*
*    Copyright [2011] [wisemapping]
*
*   Licensed under WiseMapping Public License, Version 1.0 (the "License").
*   It is basically the Apache License, Version 2.0 (the "License") plus the
*   "powered by wisemapping" text requirement on every single page;
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the license at
*
*       http://www.wisemapping.org/license
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
 */

web2d.peer.ToolkitVML =
{
    init: function()
    {
        var domDocument = window.document;
        //ownerDocument;
        // Add VML includes and namespace
        var style = domDocument.createStyleSheet();
        try
        {
            domDocument.namespaces.add("v", "urn:schemas-microsoft-com:vml");
        } catch(j)
        {
            try
            {
                domDocument.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML");
            } catch(k)
            {

            }
        }

        try
        {
            style.addRule("v\\:*", "behavior:url(#default#VML);  display:inline-block");
        } catch(e)
        {
            style.addRule('v\\:polyline', 'behavior: url(#default#VML);display:inline-block');
            style.addRule('v\\:fill', 'behavior: url(#default#VML);display:inline-block');
            style.addRule('v\\:stroke', 'behavior: url(#default#VML);display:inline-block');
            style.addRule('v\\:oval', 'behavior: url(#default#VML);display:inline-block');
            style.addRule('v\\:group', 'behavior: url(#default#VML);display:inline-block');
            style.addRule('v\\:image', 'behavior: url(#default#VML);display:inline-block');
            style.addRule('v\\:line', 'behavior: url(#default#VML);display:inline-block');
            style.addRule('v\\:rect', 'behavior: url(#default#VML);display:inline-block');
            style.addRule('v\\:roundrect', 'behavior: url(#default#VML);display:inline-block');
            style.addRule('v\\:shape', 'behavior: url(#default#VML);display:inline-block');
            style.addRule('v\\:textbox', 'behavior: url(#default#VML);display:inline-block');
        }

    },
    createWorkspace: function(element)
    {
        return new web2d.peer.vml.WorkspacePeer(element);
    },
    createGroup: function()
    {
        return new web2d.peer.vml.GroupPeer();
    },
    createElipse: function()
    {
        return new web2d.peer.vml.ElipsePeer();
    },
    createLine: function()
    {
        return new web2d.peer.vml.LinePeer();
    },
    createCurvedLine: function()
    {
        return new web2d.peer.vml.CurvedLinePeer();
    },
    createCurvedLine: function()
    {
        return new web2d.peer.vml.CurvedLinePeer();
    },
    createImage: function ()
    {
        return new web2d.peer.vml.ImagePeer();
    },
    createText: function ()
    {
        return new web2d.peer.vml.TextBoxPeer();
    },
    createRect: function(arc)

    {
        return new web2d.peer.vml.RectPeer(arc);
    },
    createArialFont: function()
    {
        return new web2d.peer.vml.ArialFont();
    },
    createTimesFont: function()
    {
        return new web2d.peer.vml.TimesFont();
    },
    createVerdanaFont: function()
    {
        return new web2d.peer.vml.VerdanaFont();
    },
    createTahomaFont: function()
    {
        return new web2d.peer.vml.TahomaFont();
    }

};

web2d.peer.ToolkitSVG =
{
    init: function()
    {
    },
    createWorkspace: function(element)
    {
        return new web2d.peer.svg.WorkspacePeer(element);
    },
    createGroup: function(element)
    {
        return new web2d.peer.svg.GroupPeer();
    },
    createElipse: function()
    {
        return new web2d.peer.svg.ElipsePeer();
    },
    createLine: function()
    {
        return new web2d.peer.svg.LinePeer();
    },
    createPolyLine: function()
    {
        return new web2d.peer.svg.PolyLinePeer();
    },
    createCurvedLine: function()
    {
        return new web2d.peer.svg.CurvedLinePeer();
    },
    createText: function ()
    {
        return new web2d.peer.svg.TextPeer();
    },
    createImage: function ()
    {
        return new web2d.peer.svg.ImagePeer();
    },
    createRect: function(arc)
    {
        return new web2d.peer.svg.RectPeer(arc);
    },
    createArialFont: function()
    {
        return new web2d.peer.svg.ArialFont();
    },
    createTimesFont: function()
    {
        return new web2d.peer.svg.TimesFont();
    },
    createVerdanaFont: function()
    {
        return new web2d.peer.svg.VerdanaFont();
    },
    createTahomaFont: function()
    {
        return new web2d.peer.svg.TahomaFont();
    }
};

if (core.UserAgent.isSVGSupported())
{
    web2d.peer.Toolkit = web2d.peer.ToolkitSVG;
} else
{
    web2d.peer.Toolkit = web2d.peer.ToolkitVML;
}